"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Brenden Riley
   Date:   3.1.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

// creates the reportHTML variable, which has the page's title
var reportHTML = "<h1>" + raceTitle + "</h1>";

// For each item in the array, The reportHMTL will create a table containing candidate information, which is filled in using the candidate rows function created later on.
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Votes</th></tr>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}

// The document is edited to place the reportHTML inside of the first section element
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

// The candidateRows function fills in information on each candidate from the arrays, the information then is added to the rowHTML, with the percentage for the candidate being rounded to the nearest tenth. For each candidate in the array, it will create a bar for that candidate, and then closing of the table row. The value of rowHTML is then returned
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + "%)</td>";
        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        rowHTML += "</tr>";
    }
    return rowHTML;
}

// The create bar function will create a barHTML variable, and then check for what the party of the candidate is, and create HTML that creates different bars depending on the party type.
function createBar(partyType) {
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }
    return barHTML;
}



//BELOW IS ALL PREMADE
/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}


/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}