function pow(a,b){
    let res=1;
    for (let i=1;i<=b;i++){
        res*=a;
    }
    return res;
}

alert(pow(3, 2));
alert(pow(3, 3));
alert(pow(1, 100));