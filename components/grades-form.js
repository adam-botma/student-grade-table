class GradeForm {

  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.eventListener = document.addEventListener('submit', this.handleSubmit);
  }

  onSubmit (createGrade){
    this.createGrade = createGrade;
  }

  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    var currentName = formData.get('name');
    var currentCourse = formData.get('course');
    var currentGrade = formData.get('grade');
    this.createGrade(currentName, currentCourse, currentGrade);
    event.target.reset();
  }
}
