function isnum(){
    let num;

    do{
       num=prompt("Enter a number");
    }while( !isFinite(num));

    if(num==null || num==''){
        return null;
    }
    else if(typeof +num=='number'){
        return +num;
    }
   
}

alert(isnum());