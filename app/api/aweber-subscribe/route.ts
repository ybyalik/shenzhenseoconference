import { NextRequest, NextResponse } from 'next/server';

const AWEBER_API_BASE = 'https://api.aweber.com/1.0';
const AWEBER_TOKEN_URL = 'https://auth.aweber.com/oauth2/token';

// In-memory cache for refreshed access token
let cachedAccessToken: string | null = null;
let tokenExpiresAt: number = 0;

async function refreshAccessToken(): Promise<string> {
  const refreshToken = process.env.AWEBER_REFRESH_TOKEN;
  const clientId = process.env.AWEBER_CLIENT_ID;
  const clientSecret = process.env.AWEBER_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error('Missing OAuth credentials for token refresh');
  }

  const params = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const response = await fetch(AWEBER_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: params,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    console.error('Token refresh failed:', error);
    throw new Error('Failed to refresh access token');
  }

  const data = await response.json();
  cachedAccessToken = data.access_token;
  tokenExpiresAt = Date.now() + (data.expires_in * 1000) - 60000; // Refresh 1 min before expiry

  console.log('Access token refreshed successfully');
  return data.access_token;
}

async function getValidAccessToken(): Promise<string> {
  // Check if we have a cached token that hasn't expired
  if (cachedAccessToken && Date.now() < tokenExpiresAt) {
    return cachedAccessToken;
  }

  // Try using the token from environment first
  const envToken = process.env.AWEBER_ACCESS_TOKEN;
  if (envToken && !cachedAccessToken) {
    cachedAccessToken = envToken;
    tokenExpiresAt = Date.now() + 3600000; // Assume 1 hour validity
    return envToken;
  }

  // Refresh the token
  return await refreshAccessToken();
}

async function addSubscriber(email: string, name?: string): Promise<Response> {
  const accountId = process.env.AWEBER_ACCOUNT_ID;
  const listId = process.env.AWEBER_LIST_ID;

  if (!accountId || !listId) {
    throw new Error('Missing AWeber account or list ID');
  }

  const accessToken = await getValidAccessToken();
  const subscribersUrl = `${AWEBER_API_BASE}/accounts/${accountId}/lists/${listId}/subscribers`;

  const subscriberData = {
    email,
    ...(name && { name }),
    tags: ['early-bird-notification', 'website-signup'],
    ad_tracking: 'website-early-bird-form',
  };

  const response = await fetch(subscribersUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify(subscriberData),
  });

  // If token is invalid, refresh and retry once
  if (response.status === 401) {
    console.log('Access token expired, refreshing...');
    const newToken = await refreshAccessToken();
    
    return await fetch(subscribersUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${newToken}`,
      },
      body: JSON.stringify(subscriberData),
    });
  }

  return response;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add subscriber to AWeber list
    const response = await addSubscriber(email, name);

    if (response.ok) {
      const locationHeader = response.headers.get('location');
      
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to Early Bird notifications',
        subscriberUrl: locationHeader,
      });
    } else {
      const errorData = await response.json().catch(() => ({}));
      
      // Check if subscriber already exists
      if (response.status === 400 && errorData.error?.message?.includes('already subscribed')) {
        return NextResponse.json(
          { error: 'Email already subscribed to our list' },
          { status: 400 }
        );
      }

      console.error('AWeber API error:', errorData);
      return NextResponse.json(
        { error: errorData.error?.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.error('AWeber subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
