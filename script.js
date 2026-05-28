document.addEventListener("DOMContentLoaded", () => {
    // Select all video elements on the page
    const videos = document.querySelectorAll(".video");

    // Fix: Stop overlapping audio when one video plays, pause others
    videos.forEach(video => {
        video.addEventListener("play", () => {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });

    console.log("Lamassate Zamane Custom JavaScript Loaded Successfully.");
});