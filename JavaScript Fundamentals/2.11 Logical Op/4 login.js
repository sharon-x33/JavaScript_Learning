user=prompt("Who's there?");
if(!user){
    alert("Cancelled");
}
else if(user=="Admin")
{
    password=prompt("Enter the password");
    if(!password){
        alert("Cancelled");
    }else if(password=="TheMaster"){
        alert("Welcome!");
    }
    else{
        alert("Wromg password");
    }
}
else{
    alert("I dont know you");
}