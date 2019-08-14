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
<<<<<<< HEAD
}
=======
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
>>>>>>> 8a4d26ba02c321d7fab0424a2658a1384c632a7e
