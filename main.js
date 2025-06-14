document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuOpen = document.querySelector('.menu-open');
    const closeMenu = document.querySelector('.close-menu');
    const menuItems = document.querySelectorAll('.menu-open ul li a');

    menuOpen.style.display = "none";
    
    hamburgerMenu.addEventListener('click', () => {
        menuOpen.style.display = "flex";
        
    });

    closeMenu.addEventListener('click', () => {
        menuOpen.style.display = "none";
    });

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menuOpen.style.display = "none";
        });
    });
});
/*document.addEventListener('DOMContentLoaded', () => {
    const text = "an antwerp based digital experience designer";
    let index = 0;
    let speed = 40; // Adjust typing speed (milliseconds)
    const titleElement = document.getElementById("title");

    function typeWriter() {
        if (index < text.length) {
                const char = text.charAt(index);
                const nextChar = text.charAt(index + 1);

                titleElement.textContent += char;
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        window.onload = function() {
            typeWriter();
        };
});*/
document.addEventListener('DOMContentLoaded', () => {
    const text = "bridging (digital) experience, behavior and strategy.";
    let index = 0;
    let speed = 36; // Adjust typing speed (milliseconds)
    const titleElement = document.getElementById("title");

    // Initialize the titleElement with empty spaces to reserve space
    titleElement.textContent = " ".repeat(text.length);

    function typeWriter() {
        if (index < text.length) {
            const char = text.charAt(index);
            // Replace the corresponding character with the typed character
            titleElement.textContent = titleElement.textContent.substring(0, index) + char;
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    window.onload = function() {
        typeWriter();
    };
});

/*document.addEventListener("DOMContentLoaded", function () {
    const mouseTrail = document.getElementById('mouse-trail');

    const dots = [];
    const numDots = 16; // Number of dots in the trail
    const dotSize = 10; // Size of each dot
    const dotSpacing = 10; // Spacing between dots

    // Create the dots and add them to the mouse trail container
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'mouse-trail-dot';
        mouseTrail.appendChild(dot);
        dots.push(dot);
    }

    // Function to update the position of the dots based on mouse movement
    function updateDots(mouseX, mouseY) {
        for (let i = dots.length - 1; i > 0; i--) {
            const prevDot = dots[i - 1];
            const dot = dots[i];
            dot.style.left = prevDot.style.left;
            dot.style.top = prevDot.style.top;
        }
        if (dots.length > 0) {
            dots[0].style.left = mouseX - dotSize / 2 + 'px';
            dots[0].style.top = mouseY - dotSize / 2 + 'px';
        }
    }

    // Event listener to update mouse coordinates
    document.addEventListener('mousemove', function (event) {
        updateDots(event.pageX, event.pageY);
    });

    // Animation loop
    function animate() {
        dots.forEach(function (dot, index) {
            dot.style.opacity = index / numDots;
        });
        requestAnimationFrame(animate);
    }

    animate();
});*/
document.addEventListener("DOMContentLoaded", function () {
    const mouseTrail = document.getElementById('mouse-trail');

    const dots = [];
    const numDots = 16; // Number of dots in the trail
    const dotSize = 10; // Size of each dot
    const dotSpacing = 10; // Spacing between dots

    // Create the dots and add them to the mouse trail container
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'mouse-trail-dot';
        mouseTrail.appendChild(dot);
        dots.push(dot);
    }

    // Function to update the position of the dots based on mouse movement
    function updateDots(mouseX, mouseY) {
        for (let i = dots.length - 1; i > 0; i--) {
            const prevDot = dots[i - 1];
            const dot = dots[i];
            dot.style.left = prevDot.style.left;
            dot.style.top = prevDot.style.top;
        }
        if (dots.length > 0) {
            dots[0].style.left = mouseX - dotSize / 2 + 'px';
            dots[0].style.top = mouseY - dotSize / 2 + 'px';
        }
        mouseTrail.style.display = 'block'; // Always show the trail while mouse is moving
    }

    // Variable to track if the mouse is currently moving
    let isMouseMoving = false;

    // Event listener to update mouse coordinates and track mouse movement
    document.addEventListener('mousemove', function (event) {
        updateDots(event.pageX, event.pageY);
        isMouseMoving = true;
    });

    // Event listener to hide the mouse trail when mouse stops moving
    setInterval(function() {
        if (!isMouseMoving) {
            mouseTrail.style.display = 'none';
        }
        isMouseMoving = false;
    }, 100); 

    // Animation loop
    function animate() {
        dots.forEach(function (dot, index) {
            dot.style.opacity = index / numDots;
        });
        requestAnimationFrame(animate);
    }

    animate();
});

// Define an array of colors
/*const colors = ['#80ffcc', '#FF10F0', '#cfff04', '#FF5F1F'];

// Get all h2 elements with the class 'color-cycle'
const headings = document.querySelectorAll('h2.colors');

// Loop through each h2 element and set its color
for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = colors[i % colors.length];
}*/

var granimInstance = new Granim({
    element: '#logo-canvas',
    direction: 'diagonal', // Change direction if you want (diagonal, top-bottom, etc.)
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#EB3349', '#F45C43'],
                ['#FF8008', '#FFC837'],
                ['#4CB8C4', '#3CD3AD'],
                ['#24C6DC', '#514A9D'],
                ['#FF512F', '#DD2476'],
                ['#DA22FF', '#9733EE']
            ],
            transitionSpeed: 10000 // Speed of the transition between gradients
        }
    }
});
