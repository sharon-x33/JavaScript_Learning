let n=prompt("Enter the interval");

for(let i=2;i<=n;i++)
{
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        alert(i);
    }
}