/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/classrooms              ->  index
 * POST    /api/classrooms              ->  create
 * GET     /api/classrooms/:id          ->  show
 * PUT     /api/classrooms/:id          ->  update
 * DELETE  /api/classrooms/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import {Classroom} from '../../sqldb';
import ClassroomEvents from './classroom.events'

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  console.log(res);
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Classrooms
export function index(req, res) {
  return Classroom.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Classroom from the DB
export function show(req, res) {
  return Classroom.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Classroom in the DB
export function create(req, res) {
  console.log(req.body);
  return Classroom.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Classroom in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Classroom.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Classroom from the DB
export function destroy(req, res) {
  return Classroom.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

export function changePage(req, res) {
  console.log(req.body);
  let page = req.body.page;
  ClassroomEvents.emit('changePage', page);
  res.status(200).json({
    page
  })
}
