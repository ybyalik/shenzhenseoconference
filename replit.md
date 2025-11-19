# Replit.md

## Overview

This is a full-stack web application for the Shenzhen SEO Conference 2026, featuring a modern React frontend with a Node.js/Express backend. The application serves as a landing page and ticket pre-order system for an international SEO conference connecting Eastern and Western digital markets. The site includes sections for event information, speaker teasers, venue details, FAQs, and a ticket pre-registration form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern functional components using hooks for state management
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express.js**: Minimalist web framework with TypeScript
- **Database Access**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **API Design**: RESTful endpoints with proper error handling and request logging
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema**: Centralized schema definitions in `shared/schema.ts` including users and ticket pre-orders tables
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for local development

### Component Architecture
- **UI Components**: Radix UI primitives wrapped with Tailwind styling in shadcn/ui pattern
- **Page Structure**: Single-page application with sectioned landing page design
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Component Organization**: Logical separation between UI components, page components, and business logic

### Development Workflow
- **Development Server**: Vite dev server with HMR for frontend, tsx for backend hot reloading
- **Type Safety**: Comprehensive TypeScript configuration across frontend, backend, and shared code
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/)
- **Error Handling**: Runtime error overlays and proper error boundaries

## External Dependencies

### Core Framework Dependencies
- **React**: UI library with TypeScript support
- **Express.js**: Web application framework
- **Vite**: Build tool and development server
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library following Radix + Tailwind patterns

### Data Management
- **React Hook Form**: Form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **TanStack React Query**: Server state management and caching
- **Neon Database**: Serverless PostgreSQL database (based on @neondatabase/serverless)

### Development Tools
- **TypeScript**: Static type checking across the entire stack
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

### Database and Session Management
- **Drizzle Kit**: Database migration and introspection tool
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **PostgreSQL**: Primary database system

The application follows a modern full-stack architecture with strong typing throughout, clean separation of concerns, and a focus on developer experience while maintaining production readiness.

## SEO Optimization

### Meta Tags and Metadata
All pages include comprehensive SEO-friendly metadata:
- **Home Page**: Meta tags in `app/layout.tsx` for the landing page
- **Speakers Page**: Dedicated metadata for 2025 speakers showcase
- **Sponsors Page**: Metadata configured via `app/sponsors/layout.tsx`
- **Plan Your Trip**: Travel and logistics information metadata
- **Contact Page**: Metadata configured via `app/contact/layout.tsx`
- **Terms & Conditions**: Legal page metadata
- **Privacy Policy**: Privacy information metadata

Each page includes:
- Unique, descriptive title tags
- Compelling meta descriptions (150-160 characters)
- Open Graph tags for social media sharing
- Proper page type definitions

### XML Sitemap
- **Location**: `/sitemap.xml` (Dynamic route: `app/sitemap.xml/route.ts`)
- **Content**: All 7 pages with proper priority and change frequency
- **Format**: XML sitemap compliant with sitemaps.org protocol
- **Updates**: Automatically includes last modification dates
- **Priorities**: Home (1.0), main pages (0.8), supporting pages (0.5-0.7)

### Robots.txt
- **Location**: `/public/robots.txt`
- **Configuration**: Allows all search engine crawlers
- **Sitemap Reference**: Includes link to XML sitemap
- **Purpose**: Guides search engine bots for optimal crawling

### URL Structure
- All URLs use trailing slashes for consistency
- Clean, descriptive URL paths matching page content
- Proper routing configuration via Next.js App Router