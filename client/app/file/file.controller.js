'use strict';

angular.module('plataformaApp')
  .controller('FileCtrl', function (Upload) {
    var vm = this;
    vm.fileName = '';
    vm.description = '';


    vm.upload = upload;

    function upload() {

      Upload.upload({
        url: 'upload/url',
        data: {file: vm.file, 'fileName': vm.fileName, 'description': vm.description}
      }).then(function (resp) {
        console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      }, function (resp) {
        console.log('Error status: ' + resp.status);
      }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });

    }

  });
