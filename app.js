/* Solving task fizzbuzz in different ways */

/* With the help function and "?"  */

function getFizzBuzz(num) {
	for(let i = 0; i < num; i++) {
     (i % 3 == 0 && i % 5 == 0) ? console.log("fizzbuzz") : (i % 5 == 0) ? console.log("buzz") : (i % 3 == 0) ? console.log("fizz") : console.log(i);
       }    
   }

let num = +prompt("Please, write some number: ", 0);
getFizzBuzz(num);

/* With the help function and "if..else"  */

function getFizzBuzz(num) {
	for(let i = 1; i <= num; i++) {
   	if(i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
    } else if(i % 5 == 0) {
    console.log("buzz");
    } else if (i % 3 == 0) {
    	console.log("fizz");
    } else {
    	console.log(i);
    }
       }   
       }

let num = +prompt("Please, write some number: ", 0);
getFizzBuzz(num); 

/* With the help function and "switch..case" when "switch = true"  */

function getFizzBuzz (num) {
    for(let i = 0; i < num; i++){
        switch(true) {
            case (i % 3 == 0 && i % 5 == 0):
                console.log("fizzbuzz");
            case (i % 3 == 0):
                console.log("fizz");
            case (i % 5 == 0):
                console.log("buzz");
            default: 
                console.log(i);
        }
    }
}

let num = +prompt("Please, write any number: ", 0);
getFizzBuzz(num);

/* With the help function and "switch..case" more beautiful  */

function getFizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
  
      switch(0) {
  
        case Number(!(!(i % 3) && !(i % 5))):
          console.log("fizzbuzz");
            break; 
          
        case (i % 3):
          console.log("fizz");
            break;
  
        case (i % 5):
         console.log("buzz");
            break;
  
        default:
          console.log(i);
            break;
      } 
    } 
  }
  
  let num = +prompt("Please, write any number: ", 0);
  getFizzBuzz(num); 

  /* Using this variant when you need define value, without cycle */

  function getFizzBuzz(num) {
    if(num % 3 == 0 && num % 5 == 0) {
 return "fizzbuzz";
 } else if(num % 5 == 0) {
 return "buzz";
 } else if (num % 3 == 0) {
 return "fizz";
 } else {
   return num;
 }
}

let num = +prompt("Please, write some number: ", 0);         
console.log(getFizzBuzz(num));   