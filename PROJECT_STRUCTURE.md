# PayServeMe Project Structure

This document explains the folder structure of the PayServeMe React application.

## Directory Structure

```
payserveme/
├── public/                    # Static files
├── src/                       # Source code
│   ├── assets/               # Static assets
│   │   ├── fonts/           # Custom fonts
│   │   ├── icons/           # Icon files
│   │   └── images/          # Image files
│   ├── components/          # Reusable components
│   │   ├── common/         # Common components (buttons, inputs, etc.)
│   │   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   └── ui/             # UI components (Cards, Modals, etc.)
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── services/           # API services and external integrations
│   ├── styles/             # CSS files
│   │   ├── App.css        # App-specific styles
│   │   ├── globals.css    # Global styles and variables
│   │   ├── index.css      # Main entry point for styles
│   │   ├── layout.css     # Layout-specific styles
│   │   └── pages.css      # Page-specific styles
│   ├── utils/              # Utility functions and constants
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Application entry point
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore file
├── index.html            # HTML template
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

## Key Directories Explained

### `/src/components/`
- **common/**: Shared components used throughout the app
- **layout/**: Components that define the app structure (Header, Footer, Layout wrapper)
- **ui/**: Presentational components (Buttons, Cards, Forms)

### `/src/pages/`
Contains all the page components for different routes:
- Home.jsx
- About.jsx
- Services.jsx
- Contact.jsx

### `/src/context/`
React Context providers for global state management:
- AuthContext.jsx - Authentication state and methods

### `/src/hooks/`
Custom React hooks:
- useLocalStorage.js - Hook for localStorage management

### `/src/services/`
API service layer:
- api.js - Centralized API client

### `/src/utils/`
Utility functions and constants:
- constants.js - App-wide constants
- helpers.js - Helper functions

### `/src/styles/`
All CSS files organized by scope:
- globals.css - CSS variables and global styles
- layout.css - Layout component styles
- pages.css - Page-specific styles

## Getting Started

1. Copy `.env.example` to `.env` and fill in your values
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`