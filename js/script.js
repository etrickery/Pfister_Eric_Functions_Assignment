/*
Eric Pfister
SDI 1502
Section 01
02/25/15
Functions Assignment

 */

//Variables
    var lottery;        //stores the user's choice of which lottery to draw
    var numbers[0, 1, 2, 3, 4, 5];        //an array to capture the numbers


//Functions



//Main body

    //Inform user of software intentions
    console.log("This program generates numbers for the Florida State Lottery, or Powerball depending upon user's preference.");

    //Select Powerball or lottery
    lottery = prompt("Please select the numbers to generate: (F)lorida State Lottery or (P)owerball.");

    //if user entered anything else, prompt again.
    while (lottery ==! "F"||lottery ==! "P") {
        lottery = prompt("Please type (F) for Florida State Lottery, or (P) for Powerball.");
    }

    if (lottery === "F") {
        numbers = FloStaLotto();
    }








