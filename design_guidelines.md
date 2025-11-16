# Shenzhen SEO Conference 2026 - Sponsors Page Design Guidelines

## Design Approach
**Reference-Based**: Drawing from modern conference sites (TechCrunch Disrupt, Web Summit, SXSW) with emphasis on gradient aesthetics and card-based layouts to match existing landing page. Prioritizing sponsor visibility while maintaining sophisticated visual hierarchy.

## Layout System & Spacing
**Tailwind Spacing Units**: Use 4, 8, 12, 16, 24 for consistency
- Section padding: `py-24` desktop, `py-16` mobile
- Container: `max-w-7xl mx-auto px-4`
- Inter-section gaps: `gap-16` for tier groups
- Card spacing: `gap-8` between sponsor cards

## Typography Hierarchy
- **Page Title**: 4xl/5xl font weight 700 with gradient text effect
- **Tier Headers**: 3xl/4xl font weight 600
- **Sponsor Names** (on hover): xl font weight 500
- **Supporting Text**: base/lg font weight 400
- **Font Stack**: Inter or similar modern sans-serif via Google Fonts

## Page Structure

### Hero Section
Clean, focused introduction without large hero image:
- Centered layout with gradient text heading "Our Valued Sponsors"
- Subtitle explaining sponsor tiers and appreciation (max-w-2xl centered)
- Optional CTA: "Become a Sponsor 2027" button with gradient background
- Height: Natural content height (~40vh), not full viewport

### Tier Sections (Platinum → Gold → Silver)
Each tier as distinct section with gradient card containers:

**Platinum Tier** (Premium Treatment):
- Full-width gradient border card container
- 2-column grid on desktop (`grid-cols-2`), single on mobile
- Larger logo display area (300x200px containers)
- Each sponsor in individual card with subtle hover elevation
- Tier badge with shimmer effect

**Gold Tier**:
- 3-column grid desktop (`lg:grid-cols-3`), 2-col tablet, 1-col mobile
- Logo containers: 250x160px
- Grid gap: `gap-8`
- Gradient border accent on tier header

**Silver Tier**:
- 4-column grid desktop (`lg:grid-cols-4 md:grid-cols-3`), responsive down
- Logo containers: 200x130px
- Denser layout showing volume of support

### Call-to-Action Section
Bottom section encouraging future sponsorship:
- 2-column layout: Left (compelling copy), Right (contact form or CTA button)
- Gradient background card
- "Interested in Sponsoring?" heading with benefits list

## Component Specifications

**Sponsor Cards**:
- White/light background with subtle shadow
- Rounded corners: `rounded-xl`
- Border: 1px gradient border on hover
- Padding: `p-8` for Platinum, `p-6` for Gold/Silver
- Hover state: Slight elevation increase (`shadow-lg` → `shadow-2xl`), scale 1.02
- Logo centered both axes with max-width constraints

**Tier Headers**:
- Horizontal layout with gradient line decoration
- Icon/badge indicating tier level
- Sponsor count indicator ("6 Platinum Sponsors")

**Navigation Context**:
Breadcrumb or back link to main conference page at top

## Visual Treatments
- **Gradient Backgrounds**: Subtle radial gradients on section backgrounds (blue/purple spectrum matching conference theme)
- **Card Gradients**: Border gradients on hover (shimmer effect)
- **Text Gradients**: Apply to tier headers and main title
- **Blur Effects**: None needed (no images with overlay buttons)

## Images Section

**Logo Images**:
- **Placement**: Within each sponsor card, centered
- **Format**: SVG preferred for sponsor logos (scalable, crisp)
- **Sizing**: Constrained by container dimensions, maintain aspect ratio
- **Background**: White/transparent logos work on light cards
- **Description**: Company logos in high resolution, professional brand marks

**No Hero Image**: This page uses text-focused hero with gradients instead of photographic hero

**Optional Decorative Elements**:
- Abstract gradient shapes/blobs in background (CSS, not images)
- Subtle geometric patterns in tier section backgrounds

## Accessibility
- Ensure sufficient contrast for gradient text overlays
- Alt text for all sponsor logos
- Keyboard navigation for interactive cards
- Semantic HTML: `<section>` for tiers, proper heading hierarchy

---

**Key Deliverables**: Professional sponsor showcase with clear tier differentiation, maintaining conference brand consistency through gradients and modern card design. Emphasize prestige for top-tier sponsors while creating cohesive visual rhythm across all tiers.