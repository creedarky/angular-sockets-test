/**
 * Classroom model events
 */

'use strict';

import {EventEmitter} from 'events';
var Classroom = require('../../sqldb').Classroom;
var ClassroomEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClassroomEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

var userEvents = [
  'nextPage',
  'prevPage',
  'home'
];

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Classroom.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    ClassroomEvents.emit(event + ':' + doc._id, doc);
    ClassroomEvents.emit(event, doc);
    done(null);
  }
}

export default ClassroomEvents;
