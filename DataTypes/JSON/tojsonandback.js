let user = {
    name: "John Smith",
    age: 35
};

let userjson=JSON.stringify(user);
alert(userjson);

let user2 = JSON.parse(userjson);
alert(user2);