/*
Eric Pfister
SDI 1502
Section 01
02/25/15
Functions Assignment

 */

//Variables
    var lottery;


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










