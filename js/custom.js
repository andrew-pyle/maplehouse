// Copyright (C) 2018 Maple House 501(c)3

// Style of creative.js used here
(function($) {
  "use strict"; // Start of use strict

  // Custom Scroll Reveal for weekly schedule
  // Use global variable `sr` from creative.js if availabl
  if (window.sr === undefined) {
    window.sr = ScrollReveal();
  } else {
    sr.reveal('div.schedule-card', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    }, 200);
    // Above integer passed to ScrollSync.reveal() seems to be undocumented
    // behavior. Sets an interval between the animation of each object with
    // the specified CSS selector.

  }

})(jQuery); // End of use strict
