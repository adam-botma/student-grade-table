class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateAverage(newAverage){
    document.getElementById('average-grade').textContent=newAverage;
  }
}
