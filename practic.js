//kata 1
/* const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest = data[1];

  if(largest > secondLargest) {
    largest = data[0];
    secondLargest = data[1];
  } else {
    secondLargest = data[0];
    largest = data[1];
  }

  for(let i = 2; i < data.length; i++){
    if(data[i] > largest) {
      secondLargest = largest;
      largest = data[i];
    }
  }
  return largest + secondLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); */







//kata 2
/* const conditionalSum = function(values, condition) {
  if(values.length === 0) return 0;

  let i = 0;
  let sum = 0;
  
  while(i < values.length){
    if(condition === 'even' && values[i] % 2 === 0){
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 === 1){
      sum += values[i];
    }
    i++;
  }

  return sum; 
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd")); */








//kata 3
/* const numberOfVowels = function(data) {
  let item = 'aeiou';
  let count = 0;
  for(let i = 0; i < data.length; i++){
    if(item.indexOf(data[i]) >= 0) count++;
  }
  return count;
};
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou")); */










//kata 4
/* const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0].name.length; 
  let name = '';
  for(let i = 1; i < instructors.length; i++) {
    if(instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length; //?
      name = instructors[i].name; //?
      course = instructors[i].course;
    }
    
  }
  return { 'name': name, 'course': course};
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); */












//kata 5
/* const urlEncode = function(text) {
  const regex = /\s+/g;
  return text.replace(regex, '%20');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure")); */















//kata 6
/* const whereCanIPark = function (spots, vehicle) {
  for(let y = 0; y < spots.length; y++){
    for(let x = 0; x < spots[y].length; x++){
      if(vehicle === 'regular'){
        if(spots[y][x] === 'R'){
          return [x, y];
        }
      } else if(vehicle === 'small'){
        if(spots[y][x] === 'S' || spots[y][x] === 'R'){
          return [x, y];
        }
      } else if(vehicle === 'motorcycle'){
        if(spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M'){
          return [x, y];
        }
      }
    }
  }
  return false; 
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
)); */


















//kata 7
/* const checkAir = function (samples, threshold) {
  let count = samples.filter(i => {
    return i !== 'clean'
  });
  if((count.length / samples.length) < threshold){
     return 'Clean'; 
    }  else return 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) */















//kata 8
/* const repeatNumbers = function(data) {
  let str = '';
  let  tStr= '';
  if(data.length > 1) {
    let item = 0;
    while(item < data.length){
      for(let i = 0; i < data[item][1]; i++){
        tStr += data[item][0];
    }
    str += `${tStr}`;
    tStr = '';
    if(item < data.length - 1) str += ', ';
    item++;
    }

    return str;
  } else {
    for(let i = 0; i < data[0][1]; i++){
      str += data[0][0];
    }

    return str;
  }
 
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); */















//kata 9
/* const camelCase = function(input) {
  let string = input.split("");
  string[0] = string[0].toLowerCase();
  for(let i = 0; i < string.length; i++) {
    if(string[i] === " "){
      string[i+1] = string[i+1].toUpperCase();
      string[i] = string[i].replace(" ", "");
    }
  }
  return string.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious")); */



















//kata 10
/* const multiplicationTable = function(maxValue) {
  let i = '';
  for(let y = 1; y <= maxValue; y++){
    for(let x = 1; x <= maxValue; x++){
      i += y * x + ' ';
    }
    i += '\n';
  }
  return i;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10)); */


















//kata 11
/* const PI = 3.14159 ;
const sphereVolume = function (radius) {
  return 4 / 3 * PI * Math.pow(radius, 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * height / 3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = 0;
  for(const solid of solids){
    switch(solid.type){
      case 'sphere':
        volume += sphereVolume(solid.radius);
        break;
      case 'cone':
        volume += coneVolume(solid.radius, solid.height);
        break;
      case 'prism':
        volume += prismVolume(solid.height, solid.width, solid.depth);
        break;
      default:
        volume += 0;
    }
  }
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000); */




















//kata 12
/* const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(const recipe of recipes){
    const hasItemA = (bakeryA.includes(recipe.ingredients[0]) || bakeryB.includes(recipe.ingredients[0]));
    const hasItemB = (bakeryA.includes(recipe.ingredients[1]) || bakeryB.includes(recipe.ingredients[1]));
    if(hasItemA && hasItemB)
      return recipe.name;
  }
    
}
  

 let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
 let bakeryB = ['milk', 'butter', 'cream cheese'];
 let recipes = [
     {
         name: 'Coconut Sponge Cake',
         ingredients: ['coconut', 'cake base']
     },
     {
         name: 'Persian Cheesecake',
         ingredients: ['saffron', 'cream cheese']
     },
     {
         name: 'Custard Surprise',
         ingredients: ['custard', 'ground beef']
     }
 ];

 console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); */


















//kata 13
/* const getMonthName = (month) => {
  const monthName ={
    01: 'January', 02: 'February', 03: 'March',
    04: 'April', 05: 'May', 06: 'June',
    07: 'July', 08: 'August', 09: 'September',
    10: 'October', 11: 'November', 12: 'December'
  };
  return monthName[month];
}

const getDay = (day) => {
  switch(day){
    case '01': 
      day = '1st';
      break;
    case '02': 
      day = '2nd';
      break;
    case '03': 
      day = '3rd';
      break;    
    case '11': case '21': case '31':
      day += 'st';
      break;
    case '12': case '22':
      day += 'nd';
      break;
    case '13': case '23':
      day += 'rd';      
      break;
    default:
      day += 'th';
      break;
  }
  return day;
}

const talkingCalendar = function(date) {
  const dateSplit = date.split('/');
  const year = dateSplit[0];
  const month = dateSplit[1];
  const day = dateSplit[2];

  return `${getMonthName(month)} ${getDay(day)}, ${year}`;
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24")); */




















//kata 14
/* const currencyDenominations = ['twenty', 'ten', 'five', 'two', 'one', 'quarter', 'dime', 'nickel', 'penny'];
const currencyValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];


const calculateChange = function(total, cash) {
  let changeObj = {};
  let len = currencyValue.length
  let change = cash - total;
  for(let i = 0; i < len; i++){
    if(change > currencyValue[i]){
      changeObj[currencyDenominations[i]] = Math.floor(change / currencyValue[i]);
      change = change % currencyValue[i];
    }
  }

  return changeObj;
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000)); */



















//kata 15
/* const organizeInstructors = function(instructors) {
  let organize = {};
  instructors.forEach(i => {
    if(!organize[i.course]){
        organize[i.course] = []; 
        organize[i.course].push(i.name);
    } else {
      organize[i.course].push(i.name);
    }

  })
  return organize;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
])); */





















//kata 16
/* const makeCase = function(input, selectCase) {
  let result = input;
  let styles= [];

  if(Array.isArray(selectCase)){
    for(let selectStyle of selectCase){
      styles.push(selectStyle);
    }
  } else styles.push(selectCase);

  for(let style of styles){
    switch(style){
      case "camel":
        result = camelCase(result);
        break;
      case 'pascal':
        result = pascalCase(result);
        break;
      case 'snake':
        result = snakeCase(result);
        break;  
      case 'kebab':
        result = kebabCase(result);
        break;  
      case 'title':
        result = titleCase(result);
        break;  
      case 'vowel':
        result = vowelCase(result);
        break; 
      case 'consonant':
        result = consonantCase(result);
        break;
      case 'upper':
        result = result.toUpperCase();
        break;
      case 'lower':
        result = result.toLowerCase();
    }
  } 
  return result;
}

const camelCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, "");
}

const pascalCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toUpperCase() : word.toUpperCase()
  }).replace(/\s+/g, "");
}

const snakeCase = (input) =>{
  return input.replace(/\s+/g, "_");
}

const kebabCase = (input) =>{
  return input.replace(/\s+/g, "-");
}

const titleCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
    return index == 0 ? word.toUpperCase() : word.toUpperCase()
  });
}

const vowelCase = (input) =>{
  return input.replace(/[aeiouAEIOU]/g, (word) => word.toUpperCase())
}

const consonantCase = (input) =>{
  return input.replace(/[^aeiouAEIOU]/g, (word) => word.toUpperCase())
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"])); */





















//kata 17
/* const urlDecode = function(text) {
  result = {};
  newText = text.replace(/%20/g, ' ')
                  .split('&')
                  .map(x => x.split('='))

  for(let i of newText){
    result[i[0]] = i[1]
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
 */






















//kata 18
/* const squareCode = function(message) {
  let len = Math.ceil(Math.sqrt(message.split(' ').join("").length));
  const newMessage = message.split(' ').join('');
  let code = '';
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len; j++){
      if(newMessage[len * j + i] !== undefined) {
        code += newMessage[len * j + i] 
      } else code += "";
    }
    code += " "
  }
  return code
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); */





















//kata 19
/* const generateBoard = (whiteQueen, blackQueen) =>{
  let board = [];
  let hzl = [];
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j)){
        hzl.push(1);
      } else  hzl.push(0);
    }
    board.push(hzl)
    hzl = [];
  }
  return board;
}

const queenThreat = board => {
  let queen = [];
  let k = 0;
  //find the positions of the 2 queens
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        queen[k] = [i, j];
        k++;
      }
    }
  }
  if(queen[1][0] === queen[0][0] || queen[0][1] === queen[1][1] || 
    ((Math.abs(queen[0][0] - queen[0][1]) === Math.abs(queen[1][1] - queen[1][0])))){
      return true;
    } else return false;
}



let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard)); */

























//kata 20
/* const blocksAway = function(directions) {
  let origin = [0, 0];
  let finalPos = {};

  if(directions[0] === 'right'){
    origin[0] += directions[1]; 
  } else if(directions[0] === 'left'){
    origin[1] += directions[1];
  }
  for(let i = 2; i < directions.length; i+=2){
    if(directions[i] === 'right' && directions[i-2] === 'right' && directions[i-4] === 'right' && directions[i-6] === 'right'){
      origin[1] += directions[i+1];
    } else if(directions[i] === 'right' && directions[i-2] === 'right' && directions[i-4] === 'right'){
      origin[0] -= directions[i+1]; 
    } else if (directions[i] === 'right' && directions[i-2] === 'right'){
      origin[1] -= directions[i+1]; 
    } else if (directions[i] === 'right') {
      origin[0] +=  directions[i+1];
    } else if(directions[i] === 'left' && directions[i-2] === 'left' && directions[i-4] === 'left' && directions[i-6] === 'left'){
      origin[0] += directions[i+1];
    } else if(directions[i] === 'left' && directions[i-2] === 'left' && directions[i-4] === 'left'){
      origin[1] -= directions[i+1]; 
    } else if (directions[i] === 'left' && directions[i-2] === 'left'){
      origin[0] -= directions[i+1]; 
    } else if (directions[i] === 'left') {
      origin[1] +=  directions[i+1];
    }
  }
  finalPos['east'] = origin[0];
  finalPos['north'] = origin[1];
  return finalPos;
};
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); */

























//kata 21
/* let prompt = require('prompt-sync')({ sigint: true });

let numberToGuess = Math.floor(Math.random() * 100) + 1;
let count = 0;

let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  let answer = prompt("Guess a number between 0 - 100: ");
  answer = Number(answer);
  if (isNaN(answer)) {
    count++;
    console.log('Not a number! Try again')
  } else if (answer === numberToGuess) {
    foundCorrectNumber = true;
    count++;
    console.log(`You got it! You took ${count} attempts`)
  } else if (answer < numberToGuess) {
    count++;
    console.log('Too low!');
  } else if (answer > numberToGuess) {
    count++;
    console.log('Too high!');
  }

}
let answer = prompt("Guess a number: ");
console.log("You answered: " + answer); */





















