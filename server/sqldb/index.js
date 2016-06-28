/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Classroom = db.sequelize.import('../api/classroom/classroom.model');
db.File = db.sequelize.import('../api/file/file.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

db.Classroom.hasOne(db.File, {as: 'File', foreignKey: 'file_id'});

module.exports = db;
