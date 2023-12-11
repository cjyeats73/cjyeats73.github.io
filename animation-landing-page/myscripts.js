let isButterflyOne = true;
let canSwitch = true; // New flag to control the switch
let switchDelay = 350; // Delay in milliseconds (500ms = 0.5 seconds)

document.addEventListener('mousemove', function(e) {
    var butterfly = document.getElementById('butterflyCursor');
    butterfly.style.display = 'block';
    butterfly.style.left = (e.pageX - 260) + 'px';
    butterfly.style.top = e.pageY + 'px';

    if (canSwitch) {
        if (isButterflyOne) {
            butterfly.src = 'butterfly-02.png';
        } else {
            butterfly.src = 'butterfly-01.png';
        }
        isButterflyOne = !isButterflyOne;

        canSwitch = false; // Prevent further switches
        setTimeout(function() { 
            canSwitch = true; // Allow switching after the delay
        }, switchDelay);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    let slideshowInterval;
    const images = document.querySelectorAll('.image-slide1');
    const totalImages = images.length;

    function slideImage() {
        // Hide the current image and move it off the top
        images[currentIndex].classList.remove('show');
        images[currentIndex].style.bottom = '100%';

        // Update the index for the next image
        currentIndex = (currentIndex + 1) % totalImages;

        // Pre-position the next image at the bottom and invisible
        images[currentIndex].style.bottom = '-100%';

        // After a delay, start moving the next image up and make it visible
        setTimeout(() => {
            images[currentIndex].style.bottom = '50%';
            images[currentIndex].classList.add('show');
        }, 2000); // 2-second pause
    }

    function startSlideshow() {
        slideshowInterval = setInterval(slideImage, 4000);
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    // Start the slideshow
    startSlideshow();

    // Add hover event listeners to each image
    images.forEach(image => {
        image.addEventListener('mouseenter', stopSlideshow);
        image.addEventListener('mouseleave', startSlideshow);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    let slideshowInterval;
    const images = document.querySelectorAll('.image-slide2');
    const totalImages = images.length;

    function slideImage() {
        // Hide the current image and move it off the top
        images[currentIndex].classList.remove('show');
        images[currentIndex].style.bottom = '100%';

        // Update the index for the next image
        currentIndex = (currentIndex + 1) % totalImages;

        // Pre-position the next image at the bottom and invisible
        images[currentIndex].style.bottom = '-100%';

        // After a delay, start moving the next image up and make it visible
        setTimeout(() => {
            images[currentIndex].style.bottom = '50%';
            images[currentIndex].classList.add('show');
        }, 2000); // 2-second pause
    }

    function startSlideshow() {
        slideshowInterval = setInterval(slideImage, 4000);
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    // Start the slideshow
    startSlideshow();

    // Add hover event listeners to each image
    images.forEach(image => {
        image.addEventListener('mouseenter', stopSlideshow);
        image.addEventListener('mouseleave', startSlideshow);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  let slideshowInterval;
  const images = document.querySelectorAll('.image-slide3');
  const totalImages = images.length;

  function slideImage() {
      // Hide the current image and move it off the top
      images[currentIndex].classList.remove('show');
      images[currentIndex].style.bottom = '100%';

      // Update the index for the next image
      currentIndex = (currentIndex + 1) % totalImages;

      // Pre-position the next image at the bottom and invisible
      images[currentIndex].style.bottom = '-100%';

      // After a delay, start moving the next image up and make it visible
      setTimeout(() => {
          images[currentIndex].style.bottom = '50%';
          images[currentIndex].classList.add('show');
      }, 2000); // 2-second pause
  }

  function startSlideshow() {
      slideshowInterval = setInterval(slideImage, 4000);
  }

  function stopSlideshow() {
      clearInterval(slideshowInterval);
  }

  // Start the slideshow
  startSlideshow();

  // Add hover event listeners to each image
  images.forEach(image => {
      image.addEventListener('mouseenter', stopSlideshow);
      image.addEventListener('mouseleave', startSlideshow);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  let slideshowInterval;
  const images = document.querySelectorAll('.image-slide4');
  const totalImages = images.length;

  function slideImage() {
      // Hide the current image and move it off the top
      images[currentIndex].classList.remove('show');
      images[currentIndex].style.bottom = '100%';

      // Update the index for the next image
      currentIndex = (currentIndex + 1) % totalImages;

      // Pre-position the next image at the bottom and invisible
      images[currentIndex].style.bottom = '-100%';

      // After a delay, start moving the next image up and make it visible
      setTimeout(() => {
          images[currentIndex].style.bottom = '50%';
          images[currentIndex].classList.add('show');
      }, 2000); // 2-second pause
  }

  function startSlideshow() {
      slideshowInterval = setInterval(slideImage, 4000);
  }

  function stopSlideshow() {
      clearInterval(slideshowInterval);
  }

  // Start the slideshow
  startSlideshow();

  // Add hover event listeners to each image
  images.forEach(image => {
      image.addEventListener('mouseenter', stopSlideshow);
      image.addEventListener('mouseleave', startSlideshow);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  let slideshowInterval;
  const images = document.querySelectorAll('.image-slide5');
  const totalImages = images.length;

  function slideImage() {
      // Hide the current image and move it off the top
      images[currentIndex].classList.remove('show');
      images[currentIndex].style.bottom = '100%';

      // Update the index for the next image
      currentIndex = (currentIndex + 1) % totalImages;

      // Pre-position the next image at the bottom and invisible
      images[currentIndex].style.bottom = '-100%';

      // After a delay, start moving the next image up and make it visible
      setTimeout(() => {
          images[currentIndex].style.bottom = '50%';
          images[currentIndex].classList.add('show');
      }, 2000); // 2-second pause
  }

  function startSlideshow() {
      slideshowInterval = setInterval(slideImage, 4000);
  }

  function stopSlideshow() {
      clearInterval(slideshowInterval);
  }

  // Start the slideshow
  startSlideshow();

  // Add hover event listeners to each image
  images.forEach(image => {
      image.addEventListener('mouseenter', stopSlideshow);
      image.addEventListener('mouseleave', startSlideshow);
  });
});





