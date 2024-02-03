let people = ["Greg", "Mary", "Devon", "James"];



// iterate through the array and log all people

for (let i = 0; i < people.length; i++) {

  console.log(people[i]);

}

//to remove "Greg" from the array
people.slice(0, 1);
console.log(people.slice(0, 1));

// remove "James" from the array
people.splice(2, 1);
console.log(people.slice(2, 1));






