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

  // Tab Content


  var tabElements = Array.from(document.getElementsByClassName('tab'));
  var tabContentElements = Array.from(
    document.getElementsByClassName('tab-content')
  );

  function toggleTabContent(event, idToShow, tabElements, tabContentElements) {
    // Hide all elements except the one which has the id passed as argument
    tabContentElements.forEach(function(section) {
      if (section.id !== idToShow) {
        section.style.display = 'none';
      } else {
        section.style.display = 'block';
      }
    })

    // Remove "active" class from all tabs
    tabElements.forEach(function(tab) {
      tab.classList.remove('active')
    })

    // Add "active" class to clicked tab element
    event.currentTarget.classList.add('active')
  }

})(jQuery); // End of use strict
