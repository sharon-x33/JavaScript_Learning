let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
  
let readMap = new WeakMap();
  
readMap.set(messages[0], new Date());

alert(readMap.get(messages[0]));