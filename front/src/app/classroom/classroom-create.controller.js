
export default class ClassRoomCreateController {

  constructor($http, FileUploader) {
    this.$http = $http;
    this.uploader = new FileUploader({
      autoUpload:true,
      url: '/api/files',
      queueLimit: 1,
      removeAfterUpload: true,
      onSuccessItem(item, response) {
        console.log(response)
      }
    });
  }




  // $onInit() {
  // }
  //
  // $onDestroy() {
  // }
}




