
export default class TeacherController {

  constructor($http) {
    this.$http = $http;


  }
  $onInit() {
    this.$http.get('/api/classrooms/').then(({data}) => {
      console.log(data);
      this.classes = data;
    })
  }

  $onDestroy() {

  }


}




