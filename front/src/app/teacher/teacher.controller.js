
export default class TeacherController {

  constructor($http, SocketFactory) {
    console.log('TeacherController');
    this.$http = $http;
    this.socket = SocketFactory.socket;
    this.pdf = {currentPage: 1, delegateHandle: 'pdf-teacher',
      url:'/assets/pdf.pdf',  showToolbar: false};
    this.messages = [{
      id: 1,
      username: 'username',
      name: 'name',
      message: 'Message Lorem Ipsum'
    }, {
      id: 2,
      username: 'username',
      name: 'name',
      message: 'Message Lorem Ipsum'
    }, {
      id: 3,
      username: 'username',
      name: 'name',
      message: 'Message Lorem Ipsum'
    }, {
      id: 4,
      username: 'username',
      name: 'name',
      message: 'Message Lorem Ipsum'
    }, {
      id: 5,
      username: 'username',
      name: 'name',
      message: 'Message Lorem Ipsum'
    }];
    this.message = '';

  }
  $onInit() {
    this.socket.on('classroom:changePage', (page) => {
      console.log(page)
    });
  }

  $onDestroy() {
    this.socket.removeAllListeners('classroom:changePage');
  }

  next() {
    this.$http.post('/api/classrooms/change-page', {
      page: 10
    }).then((response) => console.log(response));
  }



  prev() {
    this.loadedPdf.prev();
  }

  init() {
    this.loadedPdf.goToPage(1);
  }

  saveMessage() {
    this.messages = [this.message, ...this.messages];
    this.message = '';
  }
}




