# MACFARLAN - a collection

A beautiful React + Node.js web application featuring daily rotating images and inspirational quotes.

## Features

- **Daily Rotating Images**: A featured image that changes each day from a curated library
- **Random Quotes**: Inspirational quotes that refresh on each page load
- **Mobile Optimized**: Fully responsive design that looks great on all devices
- **Modern Stack**: Built with React for the frontend and Node.js/Express for the backend

## Tech Stack

- **Frontend**: React 18
- **Backend**: Node.js with Express
- **Styling**: CSS3 with mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

#### Development Mode (Frontend Only)
To run just the React frontend:
```bash
npm start
```
This will start the React development server on `http://localhost:3000`

#### Development Mode (Full Stack)
To run both the React frontend and Node.js backend simultaneously:
```bash
npm run dev
```
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3001`

#### Backend Only
To run just the Node.js server:
```bash
npm run server
```

### API Endpoints

When the backend is running, you can access these endpoints:

- `GET /api/image` - Get the daily featured image
- `GET /api/quote` - Get a random quote
- `GET /api/content` - Get both image and quote together

### Building for Production

To create a production build:
```bash
npm run build
```

This creates an optimized build in the `build` folder that can be deployed to Bluehost or any static hosting service.

## Customization

### Adding Your Own Images

Edit `src/data.js` and replace the Unsplash URLs with your own image URLs or paths:

```javascript
export const images = [
  '/images/your-image-1.jpg',
  '/images/your-image-2.jpg',
  // ... add more images
];
```

### Adding Your Own Quotes

Edit the `quotes` array in `src/data.js`:

```javascript
export const quotes = [
  "Your custom quote here",
  "Another inspiring quote",
  // ... add more quotes
];
```

## Deployment to Bluehost

1. Build the production version:
```bash
npm run build
```

2. Upload the contents of the `build` folder to your Bluehost public_html directory (or subdirectory for macfarlan.net)

3. If using the backend API, you'll need to:
   - Set up Node.js hosting on Bluehost (if available)
   - Or deploy the backend separately to a Node.js hosting service
   - Update the API URLs in the React app to point to your backend

## Project Structure

```
javascript/
├── public/           # Static files
├── src/
│   ├── App.js       # Main React component
│   ├── App.css      # Styles
│   ├── data.js      # Frontend data (images & quotes)
│   └── index.js     # React entry point
├── data-server.js   # Backend data (CommonJS)
├── server.js        # Express server
└── package.json     # Dependencies and scripts
```

## Learning Resources

This project demonstrates:
- React functional components with hooks (`useState`, `useEffect`)
- CSS responsive design and mobile optimization
- Node.js/Express API creation
- Date-based logic for daily rotations
- Modern JavaScript (ES6+)

## License

MIT
