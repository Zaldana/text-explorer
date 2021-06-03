const prompt = require('prompt-sync')();

//Starting position

let x = 0;
let y = 0;

//Starting prompt

let start = prompt("Your coordinates are (" + x + "," + y + ") would you like to go 'up','down', 'left', or 'right'?    ");

// Movement loop

while (start === "left" || start === "right" || start === "up" || start === "down") {
    
  if (start === "left") {
    
        x = x - 1;     
        console.log("Your coordinates are now (", x, ",", y, ")");
        start = prompt("Would you like to go 'up','down', left, or right?    ");

    }
       
    if (start === "right") {

       x = x + 1;
       console.log("Your coordinates are now (", x, ",", y, ")");
       start = prompt("Would you like to go 'up','down', left, or right?    ");

    } if (start === "up") {

        y = y + 1;
        console.log("Your coordinates are now (", x, ",", y, ")");
        start = prompt("Would you like to go 'up','down', left, or right?    ");

    } if (start === "down") {

        y = y - 1;
        console.log("Your coordinates are now (", x, ",", y, ")");
        start = prompt("Would you like to go 'up','down', left, or right?    ");
                  
    }

}