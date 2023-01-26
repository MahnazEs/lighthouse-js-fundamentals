/*for(i=100; i <=200; i++){
  console.log(i);
}*/


/*for (let num = 100; num <= 200; num++) {
  if (num % 12 === 0) {
    console.log("LoopyLighthouse" , "For number " + num + "output should be LoopyLighthouse but I found");
  }else if (num % 3 === 0) {
    console.log("Loopy", "For number " + num + " output should be Loopy but I found ");
  }else if (num % 4 === 0) {
    console.log("Lighthouse", "For number " + num + " output should be Lighthouse but I found ");
  }else{
    console.log(num, "Make sure you console.log the number!");
  }
  
}*/


for (i = 100; i <= 200; i++) {
  if (i % 3 == 0) {
    console.log(i, "Loopy");
  };
  if (i % 4 == 0) {
    console.log(i, "Lighthouse");
  };
  if (i % 3 == 0 && i % 4 == 0) {
    console.log(i, "LoopyLighthouse")
  };
};