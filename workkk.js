
/*const chooseStations = function (stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));*/





/*const finalPosition = function (moves) {
  let final = [0, 0];
  for (let move of moves) {
    if (move === "west") {
      final[0]--;
    } else if (move === "east") {
      final[0]++;
    } else if (move === "north") {
      final[1]++;
    } else {
      final[1]--;
    }
  }
  return final;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

finalPosition(moves);*/



/*function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old.");  
}

console.log(ageCalculator("Miranda", 1983, 2015));*/





/*function howManyHundreds(num){
  return num % 100 === 0 ? num / 100 : (num - num % 100) / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);*/





/*function calculateRectangleArea(length, width){
  if(length < 0 || width < 0)
    return undefined;
  else return length * width;
}

function calculateTriangleArea(base, height){
  if(base < 0 || height < 0)
    return undefined;
  else return base * height * 0.5;
}

function calculateCircleArea(radius){
  if(radius < 0)
    return undefined;
  else return Math.PI * Math.pow(radius, 2);
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
*/




/*var iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[iceCreamFlavours.length-1]);
console.log(iceCreamFlavours.length);*/




/*function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0)
    return [];
  else {
    var range = [];
    for (var i = start; i <= end; i += step) {
      range.push(i);
    }//for
    return range;
  }//else
}//range

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));*/







/*function lastIndexOf(array, value) {
  for (var i = array.length; i > 0; i--) {
    if (array[i - 1] === value)
      return i - 1;
  }
  return -1;
}*/







/*function concat(array1, array2) {
  for (var i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);*/






/*const smartGarbage = function (trash, bins) {
  // Your code in here ...
  switch (trash) {
    case 'waste':
      bins['waste']++;
      break;
    case 'recycling':
      bins['recycling']++;
      break;
    case 'compost':
      bins['compost']++;
      break;
  }
  return bins;
};*/






/*const carPassing = function (cars, speed) {
  // Your code in here ...
  let time = Date.now()
  var person = {
    time: time,
    speed: speed
  }
  cars.push(person)
  return cars

}*/



/* const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  return   vegetables.reduce( (winner, contestant) =>
                          contestant[metric] > winner[metric] ? contestant : winner).submitter

} */