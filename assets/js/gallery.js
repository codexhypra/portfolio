function openImage(image) {
    const modal = document.getElementById("modal");
    const fullscreenImage = document.getElementById("fullscreen-image");

    // Set the image source in the modal
    fullscreenImage.src = image.src;

    // Extract and display the filename without the extension
    const filenameContainer = image.parentElement.querySelector(".filename");
    const filenameWithExtension = image.alt; // Assuming alt attribute contains the filename with extension
    const filenameWithoutExtension = filenameWithExtension.replace(/\.[^/.]+$/, ''); // Remove the extension
    filenameContainer.textContent = filenameWithoutExtension;

    // Display the modal
    modal.style.display = "block";

    // Add a click event listener to the modal overlay
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeImage();
        }
    });

    // Add a keydown event listener to close the modal when "ESC" key is pressed
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeImage();
        }
    });
}

function closeImage() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    // Remove the keydown event listener when the modal is closed
    document.removeEventListener("keydown", closeImage);
}

// Add a loading bar and loading text
document.addEventListener("DOMContentLoaded", function () {
    const imageElements = document.querySelectorAll(".image-gallery img");
    const imageList = Array.from(imageElements).map((img) => img.src);

    let loadedImages = 0;

    // Function to update the loading bar and text
    function updateLoadingProgress() {
        const loadingProgress = (loadedImages / imageList.length) * 100;
        document.getElementById("loading-progress").style.width = loadingProgress + "%";
        document.getElementById("loading-text").textContent = `Loading ${imageList[loadedImages]}`;
    }

    // Function to check if all images are loaded
    function checkAllImagesLoaded() {
        if (loadedImages === imageList.length) {
            // All images are loaded, hide the loading overlay and show the gallery
            document.getElementById("loading-overlay").style.display = "none";
            document.getElementById("gallery").style.display = "block";
            document.getElementById("home-button-container").style.display = "block";
        }
    }

    // Preload images
    imageList.forEach(function (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = function () {
            loadedImages++;
            updateLoadingProgress();
            checkAllImagesLoaded();
        };
    });
});


