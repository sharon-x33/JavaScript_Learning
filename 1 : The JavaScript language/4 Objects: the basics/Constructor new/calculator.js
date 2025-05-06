function Calculator(){
    this.read=function(){
        this.a=+prompt("Enter a number");
        this.b=+prompt("Enter a number");
    };
    this.sum=function(){
        return this.a+this.b;
    };
    this.mul=function(){
        return this.a*this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );