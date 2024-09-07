function createStars(containerClass, numberOfStars) {
    const container = document.querySelector(containerClass);

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomize properties
        const topOffset = Math.random() * 100 + 'vh';
        const leftOffset = Math.random() * 100 + 'vw';
        const fallDuration = Math.random() * (12 - 6) + 6 + 's';
        const fallDelay = Math.random() * 10 + 's';

        // Apply inline styles to the star
        star.style.top = topOffset;
        star.style.left = leftOffset;
        star.style.animationDuration = `${fallDuration}, ${fallDuration}`;
        star.style.animationDelay = `${fallDelay}, ${fallDelay}`;
        
        container.appendChild(star);
    }
}

// Create 200 stars in both left and right containers to make it denser
createStars('.stars-left', 100);
createStars('.stars-right', 100);
