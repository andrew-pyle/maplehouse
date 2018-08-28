// Style of creative.js used here
(function($) {
  "use strict"; // Start of use strict

  // Custom Scroll Reveal for weekly schedule
  // Use global variable `sr` from creative.js if availabl
  if (sr === undefined) {
    sr = ScrollReveal();
  } else {
    sr.reveal('div.schedule-card.sunday', {
      delay: 0,
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('div.schedule-card.tuesday', {
      delay: 300,
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('div.schedule-card.wednesday', {
      delay: 600,
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
  }

})(jQuery); // End of use strict
