
export default class TeacherController {

  constructor($http, $timeout, SocketFactory, pdfDelegate) {
    console.log('TeacherController');
    this.$http = $http;
    this.$timeout = $timeout;
    this.socket = SocketFactory.socket;
    this.pdfDelegate = pdfDelegate;
    this.pdf = {currentPage: 1, delegateHandle: 'pdf-teacher',
      url:'/pdf/pdf.pdf',  showToolbar: false};
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
      this.loadedPdf.goToPage(page);
    });
    this.$timeout(() => {
      this.loadedPdf = this.pdfDelegate.$getByHandle(this.pdf.delegateHandle);
    }, 300);
  }

  $onDestroy() {
    this.socket.removeAllListeners('classroom:changePage');
  }

  next() {
    this.$http.post('/api/classrooms/change-page', {
      page: this.loadedPdf.getCurrentPage() + 1
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




