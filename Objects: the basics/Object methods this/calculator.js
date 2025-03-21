let calculator = {
    // ... your code ...
  

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    },


    read(){
        this.a = +prompt("Enter a number");
        this.b = +prompt("Enter a number");
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );