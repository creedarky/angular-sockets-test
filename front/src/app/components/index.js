import angular from 'angular';
import teacherClass from './teacher-class';
import classroom from './classroom';
import teacherList from './teacher-list';
import account from './account'
import home from './home'

export default angular.module('app.components', [
  teacherList, classroom, teacherClass, account, home
]).name;
