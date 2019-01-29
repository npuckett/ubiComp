/*
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * Uses the quantum random number generator at http://qrng.anu.edu.au/API/api-demo.php
 * to pull a set of quantum randoms
 *  
 */









var bitsToAsk = 8;  //can be 8 or 16
var howManyToAsk = 6;

function setup()
{
createCanvas(800, 400);
    background(255,0,0);
    noStroke();
    fill(255);  //read the color values from the message
    textSize(20);
    text("Click to get "+howManyToAsk+" quantum random Numbers", 5, height/2);
    

}



function draw()
{


}



function mousePressed()
{
var askurl = "https://qrng.anu.edu.au/API/jsonI.php?length="+howManyToAsk+"&type=uint"+bitsToAsk;

loadJSON(askurl,whatHappened);   //more details on this function here: https://p5js.org/reference/#/p5/loadJSON

}


function whatHappened(returnData)
{
console.log(returnData);  //look in the console to see the structure of the returned message


background(0,255,0);		//change the background to green
	
	//this loop goes through the array of values returned and draws a circle for each
	//the amount of circles is determined by how many randoms you ask the API to return
	for(var i=0;i<returnData.data.length;i++)
	{
		noFill();
		stroke(255);
		ellipse(width/2,height/2,returnData.data[i],returnData.data[i]);

	}


}