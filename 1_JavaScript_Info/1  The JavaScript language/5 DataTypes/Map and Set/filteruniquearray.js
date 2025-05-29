function unique(arr) {
    /* your code */
    let set1=Array.from(new Set(arr));
    
    return set1;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare, Krishna, :-O