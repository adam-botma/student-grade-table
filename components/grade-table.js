class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = " ";
    for (var i= 0; i < grades.length; i++){
      var tableRow = document.createElement('tr');
      var nameElement = document.createElement('td');
      var courseElement = document.createElement('td');
      var gradeElement = document.createElement('td');

      nameElement.textContent = grades[i].name;
      courseElement.textContent = grades[i].course;
      gradeElement.textContent = grades[i].grade;

      tableRow.append(nameElement, courseElement, gradeElement);
      tbody.append(tableRow);
    }
  }
}
