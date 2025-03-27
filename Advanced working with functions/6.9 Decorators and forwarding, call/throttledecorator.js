function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { 
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      isThrottled = true;
  
      func.apply(this, arguments); 
  
      setTimeout(function() {
        isThrottled = false; 
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }

  function f(a) {
   
   alert(a);
  }
  
  
  let f1000 = throttle(f, 1000);
  
  f1000(1); 
  f1000(2); 
  f1000(3); 