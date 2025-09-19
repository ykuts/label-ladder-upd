# Label Ladder Website

Official website for Label Ladder - a Swiss-Namibian company providing end-to-end data processing and annotation services for AI and machine learning applications.

## 🌟 Features

### Core Pages
- **Homepage** - Hero section with company overview and services
- **About Us** - Company mission, team profiles, and Label Ladder Academy information
- **Services** - Comprehensive pricing and service details for all annotation types
- **Our Approach** - 4-step methodology with interactive process visualization
- **Credentials** - Client case studies and success stories
- **Contact** - Contact form with office locations and interactive maps

### Technical Features
- **SEO Optimized** - Comprehensive meta tags, structured data, and optimized content
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Components** - Office location switcher, parallax effects, animations
- **Performance Optimized** - Next.js Image optimization, lazy loading
- **Accessibility** - WCAG compliant with proper semantic markup

### Special Components
- **Interactive Office Locations** - Switchable Zürich/Windhoek offices with maps
- **Process Design Visualization** - 4-step approach with animated flow
- **Team Gallery** - Management team and labelers showcase
- **Service Pricing Tables** - Responsive tables with mobile card view
- **Contact Form** - Netlify-ready form with validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd label-ladder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
label-ladder/
├── public/                     # Static assets
│   ├── images/                 # All images organized by section
│   │   ├── team/              # Team member photos
│   │   ├── services/          # Service illustrations
│   │   ├── approach/          # Methodology images
│   │   ├── credentials/       # Client logos and case studies
│   │   ├── icons/             # UI icons and flags
│   │   └── og/                # Open Graph images
│   └── favicon/               # Favicon files
├── src/
│   ├── components/
│   │   ├── layout/            # Header, Footer, Layout
│   │   ├── ui/                # Reusable UI components
│   │   ├── sections/          # Page sections (Hero, About, etc.)
│   │   └── seo/               # SEO components and schemas
│   ├── pages/                 # Next.js pages
│   ├── styles/                # Global CSS and Tailwind
│   ├── lib/                   # Utility functions
│   └── hooks/                 # Custom React hooks
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json
```

## 🎨 Brand & Design

### Color Palette
- **Primary**: `#00305D` (Deep Blue)
- **Secondary**: `#0086A3` (Teal)  
- **Accent**: `#ABBBCA` (Light Blue)
- **Light**: `#FFFFFF` (White)

### Typography
- **Font Family**: Montserrat (loaded via Google Fonts)
- **Alternative**: Code Pro (brand specification)

### Logo Usage
- Main logo: `/public/images/logo.png`
- White version: `/public/images/logo-white.png`

## 📱 Responsive Design

The website is designed mobile-first with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Key responsive features:
- Adaptive navigation with mobile hamburger menu
- Responsive grids and typography
- Touch-friendly interactive elements
- Optimized images for different screen sizes

## 🔧 Technical Stack

- **Framework**: Next.js 15.3.2
- **Styling**: Tailwind CSS 3.4.17
- **Fonts**: Google Fonts (Montserrat)
- **Images**: Next.js Image optimization
- **Icons**: Custom SVGs and Lucide React
- **Forms**: Native HTML with Netlify integration
- **Analytics**: Google Analytics ready (gtag setup)

## 📊 SEO Features

### Meta Tags
- Comprehensive meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Geographic meta tags for Swiss/Namibian presence

### Structured Data
- Organization schema
- LocalBusiness schemas for both offices
- Service catalog schema
- Article/FAQ schemas where applicable
- Breadcrumb navigation schema

### Performance
- Next.js Image optimization
- Lazy loading
- Optimized bundle sizes
- Static site generation ready

## 🌍 Content Management

### Images Required
To fully display the website, ensure these image directories exist:

```
/public/images/
├── logo.png & logo-white.png   # Company logos
├── team/                       # Team member photos
│   ├── lorenzo.png
│   ├── marion.png
│   ├── natasha.png
│   ├── klaudia.png
│   └── [labeler photos]
├── services/                   # Service illustrations
│   ├── text.png
│   ├── image.png
│   ├── video.png
│   ├── audio.png
│   └── entry.png
├── approach/                   # Process methodology
│   ├── assessment.png
│   ├── customDesign.png
│   ├── architecture.png
│   └── human.png
├── credentials/                # Client materials
│   ├── adaire.png
│   ├── nedbank.jpg
│   └── nedbank-logo.jpg
├── icons/                      # UI elements
│   ├── switzerland.png
│   ├── namibia.png
│   └── [service icons]
└── about/                      # About page images
    ├── office.jpg
    └── impact.jpg
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm start
# or
yarn start
```

### Static Export (for hosting)
The project is configured for static export:
```bash
npm run build
# Files will be in /out directory
```

### Netlify Deployment
The contact form is configured for Netlify:
- Form name: `contact`
- Includes honeypot protection
- Form validation and success/error states

## 📧 Contact Form Setup

The contact form includes:
- Required fields: First Name, Email, Message
- Optional fields: Last Name, Phone, Company, Service Type, Data Volume
- Client-side validation
- Netlify form processing
- Success/error state management

## 🔍 SEO Checklist

### Implemented
- ✅ Meta titles and descriptions for all pages
- ✅ Open Graph and Twitter Card tags
- ✅ Structured data (Organization, LocalBusiness, Services)
- ✅ Semantic HTML markup
- ✅ Responsive design
- ✅ Image optimization
- ✅ Internal linking structure
- ✅ Breadcrumb navigation

### Recommendations
- Add sitemap.xml generation
- Implement robots.txt
- Add Google Analytics tracking
- Set up Google Search Console
- Consider adding blog/resource section

## 🎯 Performance Optimization

- Next.js Image component for automatic optimization
- Lazy loading for images and components
- Efficient CSS with Tailwind's purge functionality
- Optimized font loading with Google Fonts
- Static generation for better performance

## 🛠️ Development

### Available Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - ESLint checking

### Adding New Content
1. **New Page**: Create in `/src/pages/`
2. **New Component**: Add to appropriate `/src/components/` subfolder
3. **New Images**: Place in organized `/public/images/` structure
4. **Styling**: Use Tailwind classes or extend in `tailwind.config.js`

## 📞 Support

For technical questions about this website:
- Email: hello@labelladder.com
- Website: [www.labelladder.com](https://www.labelladder.com)

## 📄 License

All rights reserved for Label Ladder. This website code is proprietary to Label Ladder...