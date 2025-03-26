function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
}
  
let counter = makeCounter();
let counter2 = makeCounter();
  
alert( counter() ); 
alert( counter() ); 
  
alert( counter2() ); 
alert( counter2() ); 