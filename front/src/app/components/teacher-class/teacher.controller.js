
export default class TeacherController {

  constructor($http, $timeout, $stateParams, SocketFactory, pdfDelegate) {
    console.log('TeacherController', $stateParams);
    this.$http = $http;
    this.$timeout = $timeout;
    this.socket = SocketFactory.socket;
    this.pdfDelegate = pdfDelegate;
    this.id = $stateParams.id;
  }

  $onInit() {
    this.socket.on(`changePage`, (page) => {
      console.log('changePage triggered');
      this.loadedPdf.goToPage(page);
    });

    console.log(this.socket);
    this.socket.emit('join', {id: this.id});


    this.pdf = {currentPage: 1, delegateHandle: 'pdf-teacher',
      url:'/pdf/pdf.pdf',  showToolbar: false};

    this.$timeout(() => {
      this.loadedPdf = this.pdfDelegate.$getByHandle(this.pdf.delegateHandle);
    }, 300);
    this._setMesssages();
  }

  $onDestroy() {
    this.socket.removeAllListeners('classroom:changePage');
  }

  _setMesssages() {
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

  next() {
    // this.$http.post('/api/classrooms/change-page', {
    //   page: this.loadedPdf.getCurrentPage() + 1,
    //   id: this.id
    // }).then((response) => console.log(response));
    this.socket.emit('changePage', {page: this.loadedPdf.getCurrentPage() + 1});
    this.loadedPdf.next();
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




