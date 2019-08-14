'use strict';

//Object Creator
function createMyObject() {
  return{
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello'
    }
  }
}

//Object Updater
function updateObject(obj) {

  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  
  return obj;
}

}

//Self-reference
function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function(){
        return `${this.firstName} ${this.lastName}`
      }
    }
    return person;
  }


  //Student Report
  function makeStudentsReport(data) {
    // your code here
    let report = [];
    for(let i=0; i<data.length; i++){
      report.push(`${data[i].name}: ${data[i].grade}`);
    }
    return report;

  //Deleting Keys
  const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
  }

  //Student Report
  function makeStudentsReport(data) {
    let report = [];
    for(let i=0; i<data.length; i++){
      report.push(`${data[i].name}: ${data[i].grade}`);
    }
    return report;
  }

  //Enroll in Summer School
  function enrollInSummerSchool(students) {
    let enrolled = [];
    for (let i = 0; i < students.length; i++) {
      enrolled.push({
        name: students[i].name,
        status: 'In Summer school',
        course: students[i].course
      });
    }
    return enrolled;
  }

  //Find by ID
  function findById(items, idNum) {
    for(let i=0; i<items.length; i++){
      if(items[i].id===idNum){
        return items[i]
      }
    }
  }

  //ValidateKeys Drill
  function validateKeys(object, expectedKeys) {
    // your code goes here
    if(Object.keys(object).length !== expectedKeys.length){
      return false;
    }
    for(let key in object){
      for(let elem of expectedKeys){
        if(key === elem){
          return true;
        }
      }
    }
    return false;
  }