class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }

  deleteGrade(id){
    var deleteAddress = 'https://sgt.lfzprototypes.com/api/grades/'+id;
    console.log(deleteAddress);
    $.ajax({
      method: "DELETE",
      url: deleteAddress,
      headers: { "X-Access-Token": "UEv1wvPc" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError,
    })
  }

  handleDeleteGradeError(error){
    console.error(error);
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }

  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade" : grade,
      },
      headers: { "X-Access-Token": "UEv1wvPc" },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    })
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  handleCreateGradeSuccess(){
  this.getGrades();
  }

  handleGetGradesError (error){
    console.error(error);
  }

  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var sum = 0;
    console.log(grades);
    for (var i= 0; i < grades.length; i++){
      sum += grades[i].grade;
    }
    var average = sum / grades.length;
    this.pageHeader.updateAverage(average);
  }

  getGrades () {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "UEv1wvPc"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }

  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
}
