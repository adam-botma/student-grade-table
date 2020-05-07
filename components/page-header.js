class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateAverage(newAverage){
    var roundedAverage = newAverage.toFixed(2);
    document.getElementById('average-grade').textContent=roundedAverage;
  }
}
