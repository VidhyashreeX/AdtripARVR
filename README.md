# AR Virtual Try-On System

A browser-based augmented reality application that allows users to virtually try on different outfits using their device camera. The system uses real-time body tracking to overlay dresses that follow the user's movements.

## Overview

This project implements a WebAR solution for virtual clothing try-on, similar to features found in shopping apps like Myntra or social media filters. Users can see themselves through their camera with different dresses overlaid on their body in real-time.

## Core Features

### Body Detection and Tracking
The application uses MediaPipe Pose to detect and track 33 body landmarks in real-time. This includes key points like shoulders, hips, and torso which are used to position and scale the dress overlays accurately.

### AR Dress Overlay
Dresses are dynamically positioned based on detected body landmarks. The system calculates the appropriate size and position by measuring shoulder width and body height, ensuring the dress aligns naturally with the user's body.

### Dress Selection Interface
Users can choose from multiple dress options through a simple button interface. Switching between dresses happens instantly without interrupting the camera feed or tracking.

### Photo Capture
The application includes functionality to capture and download photos of the try-on experience. Users can save their favorite looks directly to their device.

## Technology Stack

- MediaPipe Pose for body landmark detection
- HTML5 Canvas for real-time rendering
- JavaScript for application logic
- CSS3 for interface styling
- WebRTC for camera access
- Node.js for local development server

## Project Structure

```
├── index-ar.html       # Main AR application
├── index-simple.html   # Simple overlay version
├── server.js           # Local development server
├── assets/             # Dress PNG images
│   ├── dress1.png
│   ├── dress2.png
│   ├── dress3.png
│   └── dress4.png
├── README.md           # Documentation
└── .gitignore          # Git ignore rules
```

## Installation and Setup

### Running Locally

1. Navigate to the project directory
   ```bash
   cd AR-project
   ```

2. Start the development server
   ```bash
   node server.js
   ```

3. Open your browser and go to `http://localhost:8080/index-ar.html`

4. Allow camera permissions when prompted

### Alternative Method

You can also open `index-ar.html` directly in Chrome or Safari, though some features work better with a local server.

## How to Use

1. Open the application in your browser
2. Grant camera access when prompted
3. Position yourself 3-4 feet from the camera
4. Ensure your upper body is visible in the frame
5. Wait for the system to detect your body (status indicator will turn green)
6. Click on any dress button to try different outfits
7. Use the Capture Photo button to take a snapshot
8. Click Download to save the image to your device

### Tips for Best Results

- Stand in a well-lit area
- Wear clothing that contrasts with the background
- Keep your shoulders visible in the frame
- Stand relatively still for stable tracking
- Maintain distance of 3-4 feet from camera

## Deployment

The application can be deployed to any static hosting service that supports HTTPS (required for camera access).

### Netlify
1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Deploy with default build settings

### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select the branch to deploy

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the deployment prompts

## Adding Custom Dresses

1. Create transparent PNG images of dresses (recommended size: 1024x1024px)
2. Save them in the `assets/` folder with names like `dress1.png`, `dress2.png`, etc.
3. Update the button count in `index-ar.html` if adding more than 4 dresses
4. Refresh the application to see your new dresses

## Technical Details

### Body Tracking Implementation
The system uses MediaPipe Pose to detect 33 body landmarks. Key landmarks used include:
- Shoulders (landmarks 11 and 12)
- Hips (landmarks 23 and 24)

The dress size is calculated based on shoulder width, and positioning is determined relative to the shoulder midpoint. This ensures the dress scales appropriately for different body sizes and distances from the camera.

### Performance
The application runs at 30+ frames per second on modern devices. Canvas rendering is optimized for smooth performance, and MediaPipe's built-in smoothing algorithms help maintain stable tracking.

### Browser Compatibility
- Chrome (Desktop and Mobile) - Full support
- Safari (Desktop and Mobile) - Full support
- Edge - Full support
- Firefox - Limited support due to MediaPipe compatibility

## Implementation Coverage

This project addresses the following requirements:

**AR Tracking Accuracy**
Implements MediaPipe Pose with 33-point landmark detection for accurate body tracking.

**Dress Alignment Quality**
Dresses dynamically scale and position based on detected body measurements.

**Smoothness and Performance**
Maintains 30+ FPS with optimized canvas rendering and smooth landmark tracking.

**UI/UX Quality**
Clean interface with user instructions and real-time status feedback.

**Code Quality**
Well-structured code with clear comments and modular functions.

**Additional Features**
- Photo capture and download functionality
- Real-time tracking status indicator
- On-screen user guidance
- Instant dress switching

## Known Limitations

**Lighting Dependency**
The system requires good lighting conditions for accurate body detection. Poor lighting may result in tracking failures or reduced accuracy.

**Distance Sensitivity**
Optimal performance occurs when users are positioned 3-4 feet from the camera. Being too close or too far may affect dress alignment.

**Browser Support**
Firefox has limited MediaPipe support. Chrome and Safari are recommended for best results.

**Movement Constraints**
Best results are achieved when users stand relatively still. Rapid movements may cause temporary tracking instability.

**2D Limitations**
Dresses are 2D image overlays rather than 3D models, which limits realism from certain angles.

## Troubleshooting

**Camera Access Issues**
- Verify browser has camera permissions enabled
- Close other applications that might be using the camera
- Try using Chrome or Safari browsers
- Ensure you're accessing via localhost or HTTPS

**Body Detection Problems**
- Improve lighting in your environment
- Ensure your full upper body is visible in frame
- Stand 3-4 feet away from the camera
- Wear clothing that contrasts with your background

**Alignment Issues**
- Face the camera directly
- Keep both shoulders visible
- Adjust your distance from the camera
- Ensure good lighting on your upper body
