# Development Guide

## Project Overview

This is the Workout Logger app - a modern fitness tracking application with a beautiful dark UI and smooth animations.

## Design System

### Colors
- **Primary Background**: `#0d1b2a` (dark blue)
- **Secondary Background**: `#1b263b`
- **Accent/Brand**: `#13B8B1` (teal)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a8b2d1`

### Typography
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Headings**: Bold, large sizes with negative letter spacing
- **Body**: Regular weight, good line height for readability

### Components

#### Floating Action Button (FAB)
- 70px diameter circular button
- Positioned at bottom center with fixed positioning
- Gradient background with shadow
- Hover: scales to 1.1 and rotates 90deg
- Contains "+" symbol for adding workouts

#### Category Cards
- Glassmorphism effect with backdrop blur
- Hover elevates card and changes border color
- Icon + Title + Description layout
- Top border accent that animates on hover

#### Stat Cards
- Display key metrics (workouts, templates)
- Teal accent for values
- Compact, side-by-side layout

## File Structure

```
workout-app/
├── src/
│   ├── App.jsx          # Main component with layout and interactions
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles and CSS variables
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Adding New Features

### Adding a New Category Card

1. Add the card markup in `App.jsx`:
```jsx
<div 
  className="category-card"
  onClick={() => handleCategoryClick('newcategory')}
>
  <div className="category-header">
    <div className="category-icon">🏃</div>
    <h2 className="category-title">New Category</h2>
  </div>
  <p className="category-description">
    Description of the new category
  </p>
</div>
```

2. Styles are already defined in `App.css` and will be applied automatically

### Adding Navigation

To implement actual navigation:

1. Install React Router:
```bash
npm install react-router-dom
```

2. Update the click handlers to navigate instead of console.log

### Adding State Management

For complex state, consider:
- Context API for simple state
- Redux Toolkit for complex applications
- Zustand for lightweight state management

## Performance Considerations

- Uses CSS transforms for animations (hardware accelerated)
- Minimal re-renders with proper component structure
- Vite for fast HMR in development
- Optimized production build with code splitting

## Browser Support

- Modern browsers with ES6+ support
- CSS backdrop-filter support required for glassmorphism
- Fallback: older browsers will see solid backgrounds

## Future Enhancements

Priority features to add:
1. Workout creation modal
2. Template management screens
3. History view with filtering
4. Data persistence (localStorage or backend)
5. Exercise library
6. Progress charts
7. User authentication
8. Settings/preferences

## Styling Guidelines

- Use CSS variables for colors (defined in `index.css`)
- Follow mobile-first approach
- Use semantic HTML elements
- Maintain consistent spacing (multiples of 0.5rem)
- Keep animations smooth (0.3s cubic-bezier)
- Test hover states and interactions
