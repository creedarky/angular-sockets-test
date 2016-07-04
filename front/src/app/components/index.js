import angular from 'angular';
import teacherClass from './teacher-class';
import classroom from './classroom';
import teacherList from './teacher-list';

export default angular.module('app.components', [
  teacherList, classroom, teacherClass
]).name;
