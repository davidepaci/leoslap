const totalFrames = 62; // Set this to the number of frames you have
const eelImage = document.getElementById('eelImage');
const container = document.getElementById('slider-container');

/*document.getElementById('slider-container').addEventListener('mousemove', function(e) {
    var percentage = e.offsetX / this.offsetWidth;
    var frame = 1 + Math.round(percentage * (totalFrames - 1));
    eelImage.src = `images/000${frame}.jpg`;
    console.log(eelImage.src);
});*/

/*document.getElementById('slider-container').addEventListener('mousemove', function(e) {
    var activeWidth = this.offsetWidth;
    var offsetX = Math.min(e.offsetX, activeWidth);
    var percentage = 1 - (offsetX / activeWidth);
    var frame = 1 + Math.round(percentage * (totalFrames - 1));
    eelImage.src = `images/000${frame}.jpg`;
});*/

// Use window or document to listen to mousemove event over the entire screen
container.addEventListener('mousemove', function(e) {
    // Calculate the percentage of the mouse position over the container
    var percentage = (this.offsetWidth - e.offsetX) / this.offsetWidth;

    // Adjust the frame index based on the mouse position
    // The frame index is in the range [1, totalFrames]
    var frame = 1 + Math.round(percentage * (totalFrames - 1));

    // Ensure frame stays within bounds
    frame = Math.max(1, Math.min(frame, totalFrames));

    eelImage.src = `images/000${frame}.jpg`;
});