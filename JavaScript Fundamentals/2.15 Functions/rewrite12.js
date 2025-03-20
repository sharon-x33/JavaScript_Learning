age=prompt("Enter the age");
checkAge(age);

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }