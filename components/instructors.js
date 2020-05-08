class Instructor {
  constructor (){
    this.eventListener = document.getElementById('settings').addEventListener('click', this.handleSettingsClick);



  }



  handleSettingsClick(event){
    event.preventDefault();
    console.log("the click worked!!!");
  }





}
