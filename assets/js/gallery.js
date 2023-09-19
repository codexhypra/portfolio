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
}

function closeImage() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
