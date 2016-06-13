/**
 * Broadcast updates to client when the model changes
 */

'use strict';

import ClassroomEvents from './classroom.events';

// Model events to emit
var events = ['save', 'remove', 'changePage'];

export function register(socket) {
  // Bind model events to socket events
  for (var i = 0, eventsLength = events.length; i < eventsLength; i++) {
    var event = events[i];
    var listener = createListener('classroom:' + event, socket);
    console.log('classroom:' + event);
    ClassroomEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener));
  }
}


function createListener(event, socket) {
  return function(doc) {
    console.log('emit', event, doc);
    socket.emit(event, doc);
  };
}

function removeListener(event, listener) {
  return function() {
    ClassroomEvents.removeListener(event, listener);
  };
}
