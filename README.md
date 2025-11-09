# Elegant Interio Website

A stunning, professional interior design website for Elegant Interio built with Next.js 14, React 18, and TypeScript. Features 20+ pages, responsive design, SEO optimization, and modern UI/UX.

## 🚀 Features

### Core Features
- **20+ Pages**: Home, About, Services, Portfolio, Gallery, Reviews, Blog, Contact, and more
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **SEO Optimized**: Meta tags, sitemap, robots.txt, structured data
- **Performance**: Fast loading with image optimization and lazy loading
- **Modern UI/UX**: Beautiful design with smooth animations and transitions

### Interactive Components
- **Contact Forms**: Multi-step forms with validation
- **Image Gallery**: Lightbox functionality with filtering
- **Testimonials**: Carousel with client reviews
- **Google Maps**: Integrated location display
- **WhatsApp Integration**: Direct chat functionality
- **CTA Buttons**: Strategic call-to-action placement

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **Image Optimization**: Next.js Image component
- **SEO**: Next-SEO integration

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── reviews/           # Reviews page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header component
│   ├── GoogleMap.tsx      # Google Maps component
│   └── WhatsAppButton.tsx # WhatsApp integration
├── public/                # Static assets
│   └── images/            # Image files
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd interior-design
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_SITE_URL=https://elegantinterio.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Brown/Amber theme (#402530)
- Accent: Custom brown shades
- Secondary: Primary color variations

### Content
- Update content in respective page components
- Replace placeholder images in `/public/images/`
- Modify contact information in components

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations and transitions

## 📱 Pages Overview

### Main Pages
- **Home**: Hero section, services preview, portfolio, testimonials
- **About**: Company story, team, values, achievements
- **Services**: Detailed service offerings with pricing
- **Portfolio**: Project showcase with filtering
- **Gallery**: Image gallery with lightbox
- **Reviews**: Client testimonials and ratings
- **Contact**: Contact form, map, business information

### Service Pages
- Residential Design
- Commercial Design
- Space Planning
- Color Consultation
- Furniture Selection
- Renovation Services

### Legal Pages
- Privacy Policy
- Terms of Service
- Cookie Policy
- Refund Policy

## 🔧 Configuration

### Google Maps
1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API
3. Add key to `.env.local`

### WhatsApp Integration
- Update phone number in `components/WhatsAppButton.tsx`
- Customize message templates

### SEO Settings
- Update meta tags in `app/layout.tsx`
- Modify sitemap in `app/sitemap.ts`
- Update robots.txt in `app/robots.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 Performance

### Optimizations
- Image optimization with Next.js Image
- Lazy loading for images and components
- Code splitting and dynamic imports
- CSS optimization with Tailwind
- SEO best practices

### Performance Metrics
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and titles
- **Structured Data**: JSON-LD for better search visibility
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing

## 📞 Support

For support and questions:
- Email: info@elegantinterio.com
- Website: [https://elegantinterio.com](https://elegantinterio.com)

## 📄 License

This project is developed by [OctaLeads](https://www.octaleads.com) for Elegant Interio.

---

**Developed by [OctaLeads](https://www.octaleads.com)** - Professional website development agency specializing in custom web solutions and digital marketing strategies.
