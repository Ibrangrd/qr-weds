document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.image-item-wrapper');

    items.forEach(function (item) {
        const link = item.querySelector('a');
        const image = link.querySelector('img');
        const videoSrc = link.getAttribute('href').replace('html', 'mp4'); // Assumes your videos are in mp4 format with the same name

        // Create a video element
        const video = document.createElement('video');
        video.src = videoSrc;
        video.className = 'preview-video';
        video.muted = true;
        video.loop = true;
        video.style.display = 'none';
        video.style.width = '100%';
        video.style.height = '100%';

        // Insert the video element before the image
        link.insertBefore(video, image);

        link.addEventListener('mouseenter', function () {
            image.style.display = 'none';  // Hide the image
            video.style.display = 'block'; // Show the video
            video.play();                  // Play the video
        });

        link.addEventListener('mouseleave', function () {
            video.pause();                 // Pause the video
            video.style.display = 'none';  // Hide the video
            video.currentTime = 0;         // Reset the video to the beginning
            image.style.display = 'block'; // Show the image
        });
    });
});
