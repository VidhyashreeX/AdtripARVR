let mindarThree, currentDress;

// Dress configurations
const dresses = {
    dress1: {
        image: 'assets/dress1.jpeg',
        scale: 1.5,
        position: [0, -0.5, 0]
    },
    dress2: {
        image: 'assets/dress2.jpeg',
        scale: 1.6,
        position: [0, -0.6, 0]
    },
    dress3: {
        image: 'assets/dress3.jpeg',
        scale: 1.4,
        position: [0, -0.4, 0]
    },
    dress4: {
        image: 'assets/dress4.jpeg',
        scale: 1.5,
        position: [0, -0.5, 0]
    },
    dress5: {
        image: 'assets/dress5.jpeg',
        scale: 1.5,
        position: [0, -0.5, 0]
    }
};

// Initialize AR
async function initAR() {
    try {
        console.log('Starting AR initialization...');
        const container = document.getElementById('ar-container');
        
        // Check if MindAR is loaded
        if (!window.MINDAR) {
            throw new Error('MindAR library not loaded');
        }
        
        console.log('Creating MindAR instance...');
        // Create MindAR instance
        mindarThree = new window.MINDAR.FACE.MindARThree({
            container: container,
        });

        const { scene } = mindarThree;

        // Add lighting
        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);

        // Create face anchor
        const anchor = mindarThree.addAnchor(1); // Anchor to forehead area

        console.log('Loading first dress...');
        // Load first dress
        currentDress = await createDressPlane('dress1');
        anchor.group.add(currentDress);

        console.log('Starting AR tracking...');
        // Start AR
        await mindarThree.start();
        
        console.log('AR started successfully!');
        // Hide loading screen
        document.getElementById('loading').classList.add('hidden');
    } catch (error) {
        console.error('AR initialization error:', error);
        document.getElementById('loading').innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
            <p style="font-size: 14px; margin-top: 10px;">
                Camera access requires HTTPS.<br>
                Please deploy to Netlify/Vercel or use ngrok.
            </p>
        `;
    }
}

// Create dress plane with texture
function createDressPlane(dressKey) {
    return new Promise((resolve, reject) => {
        const config = dresses[dressKey];
        const loader = new THREE.TextureLoader();
        
        loader.load(
            config.image,
            (texture) => {
                console.log(`Loaded dress: ${dressKey}`);
                const geometry = new THREE.PlaneGeometry(1, 1);
                const material = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    side: THREE.DoubleSide
                });
                
                const plane = new THREE.Mesh(geometry, material);
                plane.scale.set(config.scale, config.scale, config.scale);
                plane.position.set(...config.position);
                
                resolve(plane);
            },
            undefined,
            (error) => {
                console.error(`Error loading dress ${dressKey}:`, error);
                reject(error);
            }
        );
    });
}

// Switch dress
async function switchDress(dressKey) {
    if (!mindarThree) return;
    
    const anchor = mindarThree.addAnchor(1);
    
    // Remove old dress
    if (currentDress) {
        anchor.group.remove(currentDress);
        currentDress.geometry.dispose();
        currentDress.material.dispose();
    }
    
    // Add new dress
    currentDress = await createDressPlane(dressKey);
    anchor.group.add(currentDress);
}

// Button event listeners
document.querySelectorAll('.dress-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const dressKey = btn.getAttribute('data-dress');
        
        // Update active button
        document.querySelectorAll('.dress-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Switch dress
        await switchDress(dressKey);
    });
});

// Wait for all libraries to load
function waitForLibraries() {
    return new Promise((resolve) => {
        const checkLibraries = () => {
            if (window.THREE && window.MINDAR && window.MINDAR.FACE) {
                console.log('All libraries loaded successfully');
                resolve();
            } else {
                console.log('Waiting for libraries...');
                setTimeout(checkLibraries, 100);
            }
        };
        checkLibraries();
    });
}

// Start when page and libraries are loaded
window.addEventListener('load', async () => {
    await waitForLibraries();
    initAR();
});
