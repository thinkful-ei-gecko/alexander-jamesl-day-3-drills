//Object Creator
function createMyObject() {
    // your code here
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
  // your code here
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
  
  return obj;
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
  }