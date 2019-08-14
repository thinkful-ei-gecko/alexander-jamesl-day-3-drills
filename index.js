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
