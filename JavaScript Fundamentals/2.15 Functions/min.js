function min(a,b){
    let min;
    if(a<b)
        min=a;
    else if(b<a){
         min=b;
    }
    else
    min=a;
 return min;
}


alert(min(2, 5) == 2);
alert(min(3, -1) == -1);
alert(min(1, 1) == 1);