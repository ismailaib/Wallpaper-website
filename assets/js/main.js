      //common reveal options to create reveal animations
      ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
      });

      //target elements, and specify options to create reveal animations
      ScrollReveal().reveal('.main-title, .section-title', { delay: 300, origin: 'left' });
      ScrollReveal().reveal('.sec-01 .image, .info', { delay: 400, origin: 'bottom' });
      ScrollReveal().reveal('.text-box', { delay: 500, origin: 'right' });
      ScrollReveal().reveal('.media-icons i', { delay: 300, origin: 'bottom', interval: 100 });
      ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 300, origin: 'top' });
      ScrollReveal().reveal('.media-info li', { delay: 300, origin: 'left', interval: 100 });


