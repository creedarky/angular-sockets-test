import angular from 'angular';

export default angular.module("app.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
}).name
