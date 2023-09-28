// functions-extra.js

// Function to toggle the navigation menu on small screens
function toggleNav() {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("open");
  }
  
  // Function to handle smooth scrolling to anchor links
  function smoothScroll(target) {
    var targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
  
  // Function to hide the loading overlay when the page has fully loaded
  function hideLoadingOverlay() {
    var loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
      loadingOverlay.style.display = "none";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to the nav toggle button
    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
      navToggle.addEventListener("click", function () {
        toggleNav();
      });
    }
  
    // Add click event listener to the navigation links for smooth scrolling
    var navLinks = document.querySelectorAll(".nav a");
    if (navLinks) {
      navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          var target = link.getAttribute("href");
          smoothScroll(target);
          // Close the navigation menu on small screens after clicking a link
          var nav = document.querySelector(".nav");
          nav.classList.remove("open");
        });
      });
    }
  
    // Hide the loading overlay when the page has fully loaded
    hideLoadingOverlay();
  });

  $(document).ready(function() {
    // Smooth scrolling for anchor links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        // Add smooth scrolling animation
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  });
  
  