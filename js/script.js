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


//Functions
    function numberGenerator() {}


//Main body

    //Inform user of software intentions
    console.log("This program generates numbers for the Florida State Lottery, or Powerball depending upon user's preference.");

    //Select Powerball or lottery
    lottery = prompt("Please select the numbers to generate: (F)lorida State Lottery or (P)owerball.");

    //if user entered anything else, prompt again.
    while (lottery ==! "F"||lottery ==! "P") {
        lottery = prompt("Please type (F) for Florida State Lottery, or (P) for Powerball.");
    }

    if (lottery === "F") {                         //determine whether user selected F or not
        while (counter < 6) {                      //as long as counter is less than 6,
            numbers[counter] = numberGenerator;    //numbers the array, each slot is loaded with random number from function

            counter++;                             //increase counter
        }                                          //restart while loop, or if fulfilled, continue on below
        console.log("Your potentially winning Florida State Lottery Numbers Are:\n");
        counter = 0;                               //reset counter
        for (counter < 6; counter++;) {            //for loop to display each numbers array
            console.log(numbers[counter]);         //display array
        }


    }








