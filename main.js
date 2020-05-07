var myTable = document.querySelector('table');
var myHeader = document.querySelector('header');

var gradeTable = new GradeTable(myTable);

var pageHeader = new PageHeader(myHeader);

var app = new App(gradeTable, pageHeader);
app.start();
