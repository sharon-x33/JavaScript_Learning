function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("Enter a number");
      if (value === "" || value === null || !isFinite(value)) {
        break;
    }
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}

alert( sumInput() );