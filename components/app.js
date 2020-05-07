class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeForm = gradeForm;
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

}
}
