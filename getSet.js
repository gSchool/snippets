class Building {
  constructor(numberOfFloors, yearLastInspected) {
    this._numberOfFloors = numberOfFloors;
    this._yearLastInspected = yearLastInspected;
    this._anotherNumber = 9;
  }

  getNumberOfFloors() {
    return this._numberOfFloors;
  }

  getYearLastInspected() {
    return this._yearLastInspected;
  }

  setYearLastInspected(newValue) {
    this._yearLastInspected = newValue;
  }

  getAnotherNumber() {
    return this._anotherNumber;
  }

  addFloor() {
    this._numberOfFloors += 1;
  }

  needsInspection() {
    return new Date().getFullYear() - this._yearLastInspected > 10;
  }
}

const empireState = new Building(102, 2014);         // 102 floors inspected in 2014
console.log(empireState.getNumberOfFloors());        // 102
console.log(empireState.getYearLastInspected());     // 2014
empireState.setYearLastInspected(2016);
console.log(empireState.getYearLastInspected());     // 2016
console.log(empireState.getAnotherNumber());     // 9
