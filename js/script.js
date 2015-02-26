/*
Eric Pfister
SDI 1502
Section 01
02/25/15
Functions Assignment

 */

//Variables
    var lottery;                //stores the user's choice of which lottery to draw
    var numbers = [];           //an array to capture the numbers
    var counter = 0;            //a counting variable
    var max;                    //max number for the functions
    var min;                    //min number for the functions

//Functions
    function numberGenerator(x, n) {
        return Math.round(n + (Math.random() * (x - n)));
    }


//Main body

    //Inform user of software intentions
    console.log("This program generates numbers for the Florida State Lottery, or Powerball depending upon user's preference.");

    //Select Powerball or lottery
    lottery = prompt("Please select the numbers to generate: (F)lorida State Lottery or (P)owerball.");

    //if user entered anything else, prompt again.
    while (lottery ==! "F"||lottery ==! "P") {
        lottery = prompt("Please type (F) for Florida State Lottery, or (P) for Powerball.");
    }

    //Florida State Lottery
    if (lottery === "F") {                          //determine whether user selected F or not
        max = 53;                                   //set the maximum for each number
        min = 1;                                    //set the minimum for each number
        counter = 0;
        while (counter < 6) {                       //as long as counter is less than 6,
            numbers[counter] = numberGenerator(max, min);     //numbers the array, each slot is loaded with random number from function
            counter++;


        }
    console.log("Your potentially winning Florida State Lottery Numbers Are:");
    console.log(numbers[0] + ", " + numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4] + ", and " + numbers[5]);
    } else {
        max = 59;
        min = 1;
        counter = 0;
        while (counter < 5) {
            numbers[counter] = numberGenerator(max, min);
            counter++;
        }

        //generate a powerball number
        max = 35;
        min = 1;

        numbers[5] = numberGenerator(max, min);


     //display
        console.log("Your potentially winning Powerball Numbers Are:");
        console.log(numbers[0] + ", " + numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4] + ", and the Powerball is " + numbers[5]);

    }














