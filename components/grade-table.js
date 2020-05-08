class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tableRow = document.createElement('tr');
    var nameElement = document.createElement('td');
    var courseElement = document.createElement('td');
    var gradeElement = document.createElement('td');
    var createdByElement = document.createElement('td');
    var operationsElement = document.createElement('td');
    var deleteButton = document.createElement('button');

    nameElement.textContent = data.name;
    courseElement.textContent = data.course;
    gradeElement.textContent = data.grade;
    createdByElement.textContent = data.createdBy;
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger'
    deleteButton.addEventListener('click', function(){ deleteGrade(data.id)});
    operationsElement.append(deleteButton);
    tableRow.append(nameElement, courseElement, gradeElement, createdByElement, operationsElement);
    return tableRow;

  }

  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = " ";
    if (!grades.length) {
      this.noGradesElement.className='';
    } else {
      this.noGradesElement.className = 'd-none'
    }
    for (var i = 0; i < grades.length; i++) {
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }
  }
}
