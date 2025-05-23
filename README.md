# Mountain Villa Vacation Home Website

**[View Live Website](https://67f94da50413b908173cbbc6--the-cozy-nest.netlify.app/)**

## Overview
This repository contains the code for a luxury vacation home website showcasing a mountain villa getaway. The site features a modern, parallax-scrolling design with sections highlighting different areas of the property, location information, and contact details.

## Features
- Responsive design that works across desktop, tablet, and mobile devices
- Parallax scrolling effects for immersive visual experience
- Multiple styled sections showcasing different aspects of the property:
  - Landing page with hero image
  - About section with property overview
  - Bedroom showcase with detailed images
  - 3D rotating image gallery
  - Location information with map integration
  - Contact section for inquiries

## Structure
The website consists of:
- `index.html` - Main HTML document
- `style.css` - Comprehensive stylesheet with responsive design
- `/images` directory - Contains all property photos and assets

## CSS Structure
The CSS is organized into several key sections:
1. **Global Styles & Header** - Base styling, typography, and navigation
2. **Parallax Section** - Parallax scrolling implementation
3. **About Section** - Property overview styling
4. **Bedroom Showcase** - Grid-based layout for bedroom images and descriptions
5. **3D Gallery** - Rotating image showcase with animation
6. **Location Section** - Map integration and address information
7. **Contact Section** - Contact form and social media links
8. **Footer** - Copyright and additional navigation

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Installation
1. Clone this repository
2. Open `index.html` in your browser

For local development with live reloading:
```bash
# Using npm
npm install -g live-server
live-server

# Or using Python
python -m http.server
```

## Dependencies
- Google Fonts: Poppins, Libre Baskerville, Odibee Sans, ICA Rubrik
- No JavaScript frameworks required - site uses vanilla JS and CSS animations

## Customization
To customize the site for a different property:
1. Replace images in the `/images` directory with new property photos
2. Update text content in `index.html`
3. Modify color scheme in `style.css` by changing key variables:
   - Background color (`#CBCBCB`)
   - Accent colors (`#359381`, `#003329`)
   - Text colors as needed

## Known Issues
- Map section may require API key integration for full functionality
- Animation effects may have reduced performance on older mobile devices

## Future Enhancements
- Booking integration system
- Image gallery lightbox
- Availability calendar
- Additional property amenities section
- Virtual tour feature

## Credits
- Design & Development: Sarthak Dewanda
