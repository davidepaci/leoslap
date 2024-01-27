const totalFrames = 62; // Total number of frames
const eelImage = document.getElementById('eelImage');
const container = document.getElementById('slider-container');

function updateFrame(e) {
    // Determine if it's a touch event
    const isTouchEvent = e.type.startsWith('touch');

    // Get the X position based on the type of event
    let clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;

    // Calculate the percentage of the mouse/touch position over the container, from right to left
    var percentage = (container.offsetWidth - (clientX - container.getBoundingClientRect().left)) / container.offsetWidth;

    // Adjust the frame index based on the position
    var frame = 1 + Math.round(percentage * (totalFrames - 1));

    // Ensure frame stays within bounds
    frame = Math.max(1, Math.min(frame, totalFrames));

    eelImage.src = `images/000${frame}.jpg`;
}

// Handle both mouse and touch events
container.addEventListener('mousemove', updateFrame);
container.addEventListener('touchmove', updateFrame);
