// Copyright (C) 2018 Maple House 501(c)3

// Style of creative.js used here
(function($) {
  "use strict"; // Start of use strict

  // // Custom Scroll Reveal for weekly schedule
  // // Use global variable `sr` from creative.js if availabl
  // if (window.sr === undefined) {
  //   window.sr = ScrollReveal();
  // } else {
  //   sr.reveal('div.schedule-card', {
  //     duration: 600,
  //     scale: 0.3,
  //     distance: '0px'
  //   }, 200);
  //   // Above integer passed to ScrollSync.reveal() seems to be undocumented
  //   // behavior. Sets an interval between the animation of each object with
  //   // the specified CSS selector.
  //
  // }

  // Tab Content
  var tabContentIdPrefix = 'tab-content-';
  var tabsJquery = $('.tab');
  var tabContentJquery = $('.tab-content');
  var tabContentParent = $('#tab-row');

  // Select Tab Section on click
  tabsJquery.click(function (clickedTab) {
    var tabContentIdToShow = tabContentIdPrefix + this.id;
    // Toggle Shown Section
    toggleTabContentJquery(tabContentIdToShow, tabContentJquery, tabContentParent);
    // Toggle Tab Active Status
    var activeTabId = this.id;
    makeActiveTab(activeTabId, tabsJquery);
  })

  // Toggle Shown Tab-Area Content
  function toggleTabContentJquery(idToShow, tabContentElements, tabContentParent) {
    // Hide all elements except the one which has the id passed as argument
    tabContentElements.css('display', 'none');
    var selector = '#' + idToShow;
    tabContentParent.find(selector).css('display', 'block')
  }

  // Only one tab can be "active" at a time
  function makeActiveTab(tabIdToActivate, allTabContentElements) {
    // Remove "active" class from all tabs
    allTabContentElements.removeClass('active-tab');
    $('.tab-arrow').css('visibility', 'hidden');
    // Add "active" class to clicked tab element
    $('#' + tabIdToActivate).addClass('active-tab');
    $('#' + 'tab-arrow-' + tabIdToActivate).css('visibility', 'visible')
  }

  // Set Initial Tab Area state
  var defaultDisplayTabId = '#tutoring';
  $(defaultDisplayTabId).trigger('click')

})(jQuery); // End of use strict
