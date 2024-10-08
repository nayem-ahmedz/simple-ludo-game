fetch('https://nz-components.netlify.app/comps/releases/nav-1/nav.html')
    .then(response => response.text())
    .then(data => {
        const container = document.getElementById('component-nav');
        container.innerHTML = data;

        // Load your CSS if needed
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = 'https://nz-components.netlify.app/comps/releases/nav-1/nav.css';

        const script = document.createElement('script');
        script.src = 'https://nz-components.netlify.app/comps/releases/nav-1/nav.js';

        document.head.appendChild(styleLink);
        document.body.appendChild(script);
    })
    .catch(error => console.error('Error fetching component:', error));
