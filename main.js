var myTable = document.querySelector('table');
var myHeader = document.querySelector('header');
var myForm = document.querySelector('form');
var noGrades = document.getElementById('no-grades')

var gradeTable = new GradeTable(myTable, noGrades);

var pageHeader = new PageHeader(myHeader);


var gradeForm = new GradeForm(myForm);

var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
