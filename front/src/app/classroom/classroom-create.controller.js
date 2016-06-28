import moment from 'moment';

export default class ClassRoomCreateController {

  constructor($http, FileUploader) {
    this.$http = $http;
    this.uploader = new FileUploader({
      autoUpload:true,
      url: '/api/files',
      queueLimit: 1,
      removeAfterUpload: true,
      onSuccessItem: (item, response) => {
        console.log(this, response);
        this.classRoom.fileId = response._id;
      }
    });
  }

  $onInit() {
    this.classRoom = {
      name: '',
      description: '',
      fileId: null,
      startDate: new Date()
    };

    this.calendars = {
      endDate: {
        isOpen: false,
        toggle() {
          this.isOpen = !this.isOpen
        }
      },
      startDate: {
        isOpen: false,
        toggle() {
          this.isOpen = !this.isOpen
        }
      }
    };
    this.calendarsOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
  }

  save() {
    console.log(this.classRoom);
    this.$http.post('/api/classrooms/', this.classRoom).then((response) => {
      console.log(response);
    })
  }




  //
  // $onDestroy() {
  // }
}




