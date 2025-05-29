function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
  }
  
  let f1000 = delay(alert, 1000);
  
  f1000("test");


  function f(x) {
    alert(x);
  }
  
  

  let f1500 = delay(f, 1500);
  
  f1000("test"); 
  f1500("test");