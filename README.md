# WebAR Virtual Try-On Experience

A browser-based Augmented Reality dress try-on application using MindAR and Three.js.

## 🚀 Features

- Real-time face tracking using MindAR
- Virtual dress overlay with transparent PNG images
- Multiple dress selection with instant switching
- No app installation required - runs directly in browser
- Smooth tracking and rendering with Three.js

## 🛠️ Technologies Used

- **MindAR** - Face tracking and AR anchors
- **Three.js** - WebGL rendering engine
- **HTML/CSS/JavaScript** - Frontend structure and logic
- **Transparent PNG** - Dress overlay images

## 📁 Project Structure

```
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── app.js              # AR logic and dress switching
├── assets/             # Dress PNG images
│   ├── dress1.png
│   ├── dress2.png
│   └── dress3.png
└── README.md           # Documentation
```

## 🎨 Adding Your Own Dresses

1. Create transparent PNG images of dresses (recommended size: 1024x1024px)
2. Place them in the `assets/` folder
3. Update the `dresses` object in `app.js` with your image paths
4. Adjust `scale` and `position` values for proper fitting

## 🌐 Deployment

### Option 1: Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy with default settings

### Option 2: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch and deploy

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy

## 📱 Usage

1. Open the deployed website link on a mobile device or desktop with camera
2. Allow camera permissions when prompted
3. Position your face in front of the camera
4. Select different dresses using the buttons at the bottom
5. The dress will overlay on your body in real-time

## ⚙️ Configuration

Adjust dress positioning in `app.js`:

```javascript
const dresses = {
    dress1: {
        image: 'assets/dress1.png',
        scale: 1.5,              // Size of the dress
        position: [0, -0.5, 0]   // [x, y, z] position
    }
};
```

## 🔧 Local Development

1. Clone the repository
2. Serve using any local server (e.g., `python -m http.server` or Live Server extension)
3. Open in browser with HTTPS (required for camera access)

## 📝 Notes

- HTTPS is required for camera access
- Works best in Chrome/Safari on mobile devices
- Ensure good lighting for optimal face tracking
- Keep face centered in frame for best results

## 📄 License

Free to use for educational purposes.
