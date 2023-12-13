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


document.addEventListener('DOMContentLoaded', function () {
  const paths = document.querySelectorAll('.st30');
  let delay = 0;
  const delayIncrement = 100; // milliseconds

  paths.forEach(path => {
      setTimeout(() => {
          path.classList.add('path-animation');
      }, delay);
      delay += delayIncrement;
  });
});

window.addEventListener('click', ()=>{
  document.getElementById("audio").play();
});


// reveal the head image
document.addEventListener('DOMContentLoaded', function () {
  const ericHead = document.querySelector('.ericHead');

  function revealOnScroll() {
      const windowWidth = window.innerWidth;
      const imageLeft = ericHead.getBoundingClientRect().left;
      const imageVisible = 150; // Amount of the image that needs to be visible

      if (imageLeft < windowWidth - imageVisible) {
          ericHead.classList.add('revealed');
      } else {
          ericHead.classList.remove('revealed');
      }
  }

  window.addEventListener('scroll', revealOnScroll);
});

document.addEventListener('DOMContentLoaded', function () {
  const shelHead = document.querySelector('.shelHead');

  function revealOnScroll() {
      const windowWidth = window.innerWidth;
      const imageLeft = shelHead.getBoundingClientRect().left;
      const imageVisible = 150; // Amount of the image that needs to be visible

      if (imageLeft < windowWidth - imageVisible) {
        shelHead.classList.add('revealed');
      } else {
        shelHead.classList.remove('revealed');
      }
  }

  window.addEventListener('scroll', revealOnScroll);
});


document.addEventListener('DOMContentLoaded', function () {
  const beatrixHead = document.querySelector('.beatrixHead');

  function revealOnScroll() {
      const windowWidth = window.innerWidth;
      const imageLeft = beatrixHead.getBoundingClientRect().left;
      const imageVisible = 150; // Amount of the image that needs to be visible

      if (imageLeft < windowWidth - imageVisible) {
        beatrixHead.classList.add('revealed');
      } else {
        beatrixHead.classList.remove('revealed');
      }
  }

  window.addEventListener('scroll', revealOnScroll);
});

document.addEventListener('DOMContentLoaded', function () {
  const donHead = document.querySelector('.donHead');

  function revealOnScroll() {
      const windowWidth = window.innerWidth;
      const imageLeft = donHead.getBoundingClientRect().left;
      const imageVisible = 150; // Amount of the image that needs to be visible

      if (imageLeft < windowWidth - imageVisible) {
        donHead.classList.add('revealed');
      } else {
        donHead.classList.remove('revealed');
      }
  }

  window.addEventListener('scroll', revealOnScroll);
});

document.addEventListener('DOMContentLoaded', function () {
  const talithaHead = document.querySelector('.talithaHead');

  function revealOnScroll() {
      const windowWidth = window.innerWidth;
      const imageLeft = talithaHead.getBoundingClientRect().left;
      const imageVisible = 150; // Amount of the image that needs to be visible

      if (imageLeft < windowWidth - imageVisible) {
        talithaHead.classList.add('revealed');
      } else {
        talithaHead.classList.remove('revealed');
      }
  }

  window.addEventListener('scroll', revealOnScroll);
});

