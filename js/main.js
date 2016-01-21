window.onload = function(e) {
  orderEvents();
}

function orderEvents() {
  var upcomingEvents = document.getElementById("upcoming-events");
  var pastEvents = document.getElementById("past-events");

  while (true) {
    var upcomingEvent = upcomingEvents.lastElementChild;

    if (!upcomingEvent) {
      var heading = document.getElementById("upcoming-events-heading");
      if (heading) {
        heading.remove();
      }

      break;
    }

    var endTime = new Date(upcomingEvent.getAttribute("data-endtime"));
    if (endTime - new Date() > 0) {
      // oldest upcoming event is in future
      break;
    } else {
      pastEvents.insertBefore(upcomingEvent, pastEvents.firstChild);
    }
  }
}
