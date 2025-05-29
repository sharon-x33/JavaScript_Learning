let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
alert(users[0].name);
users.sort(byField('age'));
alert(users[0].name);