// Matrix rain effect
const canvas = document.querySelector('#matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Update the typing text
const text = "INITIALIZING SYSTEM...\nACCESS GRANTED...\nWELCOME TO THE CYBER ZONE...\nBEST VIEWED IN 800x600...";
const typingText = document.getElementById('typing-text');
let charIndex = 0;

function typeText() {
    contentArea.innerHTML = ''; // Clear previous content
    if (charIndex < text.length) {
        if (text.charAt(charIndex) === '\n') {
            contentArea.innerHTML += '<br>';
        } else {
            contentArea.innerHTML += text.charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start animations
setInterval(drawMatrix, 33);
setTimeout(typeText, 1000);

// Add some classic sound effects
function playBeep() {
    const audio = new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=');
    audio.play();
}

// Play beep on menu hover
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', playBeep);
});

// Update visitor counter randomly
setInterval(() => {
    const counter = document.querySelector('.counter');
    const currentCount = parseInt(counter.textContent.match(/\d+/)[0]);
    counter.textContent = `[VISITORS: ${(currentCount + 1).toString().padStart(6, '0')}]`;
    playBeep();
}, 30000);

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Add menu interaction animations
const menuItems = document.querySelectorAll('.menu-item');
const contentArea = document.querySelector('.welcome-text');

function showEnterAnimation() {
    contentArea.innerHTML = '';
    contentArea.style.animation = 'none';
    contentArea.style.opacity = '1'; // Ensure content is visible
    
    let text = `
    <div class="loading-animation">
        <div class="status-text">ACCESSING MAINFRAME...</div>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <div class="access-text"></div>
    </div>`;
    
    contentArea.innerHTML = text;
    
    let progress = 0;
    const progressBar = document.querySelector('.progress');
    const accessText = document.querySelector('.access-text');
    
    const interval = setInterval(() => {
        progress += 2;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            accessText.textContent = 'ACCESS GRANTED';
            playBeep();
        }
    }, 50);
}

function showAboutAnimation() {
    contentArea.innerHTML = '';
    contentArea.style.animation = 'none';
    
    let text = `
    <div class="about-animation">
        <pre class="ascii-art">
   /\\
  /  \\
 /    \\
/______\\
        </pre>
        <div class="scan-line"></div>
        <div class="about-text">
            SYSTEM INFO<br>
            -----------<br>
            CREATED: 1999<br>
            PURPOSE: UNKNOWN<br>
            STATUS: ACTIVE<br>
            CLEARANCE: TOP SECRET
        </div>
    </div>`;
    
    contentArea.innerHTML = text;
}

function showContactAnimation() {
    contentArea.innerHTML = '';
    contentArea.style.animation = 'none';
    
    let text = `
    <div class="contact-animation">
        <div class="terminal">
            > ESTABLISHING SECURE CONNECTION...<br>
            > ENCRYPTION ENABLED...<br>
            > CONTACT PROTOCOLS INITIALIZED...<br><br>
            > SEND MESSAGE TO:<br>
            > SYSOP@CYBERZONE.NET<br>
            > IRC: #CYBERZONE<br>
            > BBS: 555-0123
        </div>
    </div>`;
    
    contentArea.innerHTML = text;
    
    const terminal = document.querySelector('.terminal');
    terminal.style.animation = 'typing 4s steps(60, end)';
}

// Add click event listeners to menu items
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        playBeep();
        
        switch(item.textContent) {
            case '[Enter]':
                showEnterAnimation();
                break;
            case '[About]':
                showAboutAnimation();
                break;
            case '[Contact]':
                showContactAnimation();
                break;
        }
    });
});

// Add these styles to the existing styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .loading-animation {
        text-align: center;
        padding: 20px;
        position: relative;
        min-height: 100px;
    }

    .status-text {
        margin-bottom: 15px;
        animation: flicker 0.1s infinite;
    }

    .progress-bar {
        width: 100%;
        height: 20px;
        border: 2px solid #00ff00;
        margin: 10px 0;
        position: relative;
        background: #001400;
        overflow: hidden;
    }

    .progress {
        width: 0%;
        height: 100%;
        background: #00ff00;
        transition: width 0.1s linear;
        position: absolute;
        left: 0;
        top: 0;
    }

    .access-text {
        margin-top: 15px;
        animation: glow 2s ease-in-out infinite;
    }

    .about-animation {
        position: relative;
        min-height: 200px;
        padding: 20px;
    }

    .ascii-art {
        font-family: monospace;
        white-space: pre;
        text-align: center;
        color: #00ff00;
        margin: 20px 0;
        animation: rotate 4s infinite linear;
        display: block;
    }

    .contact-animation {
        position: relative;
        min-height: 200px;
        padding: 20px;
    }

    .terminal {
        text-align: left;
        white-space: pre-wrap;
        overflow: hidden;
        border-right: 2px solid #00ff00;
        animation: typing 4s steps(60, end);
        min-height: 200px;
    }

    @keyframes rotate {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
    }

    .scan-line {
        height: 2px;
        background: #00ff00;
        position: absolute;
        width: 100%;
        left: 0;
        animation: scan 2s linear infinite;
    }

    @keyframes scan {
        from { top: 0; }
        to { top: 100%; }
    }

    .about-text {
        text-align: left;
        padding: 20px;
        animation: flicker 0.1s infinite;
    }

    @keyframes typing {
        from { height: 0; }
        to { height: 200px; }
    }

    @keyframes flicker {
        0% { opacity: 1; }
        50% { opacity: 0.95; }
        100% { opacity: 1; }
    }
`;

document.head.appendChild(styleSheet); 