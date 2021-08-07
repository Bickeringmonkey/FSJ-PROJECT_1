/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotesCollect = [
  {
    quote: "Part of the journey is the end.",
    source: "Tony Stark",
    citation: "Avengers: Endgame",
    year: "2019",
    phase: "MCU Phase 3"
  },
  {
    quote: "The hardest choices require the strongest wills.",
    source: "Thanos",
    citation: "Avengers: Infinity War",
    year: "2018",
    phase: "MCU Phase 3"
  },
  {
    quote: "I would rather be a good man than a great king.",
    source: "Thor",
    citation: "Thor: Dark World",
    year: "2013",
    phase: "MCU Phase 2"
  },
  {
    quote: "Faith is my sword. Truth is my shield. Knowledge my armor.",
    source: "Stephen Strange",
    citation: "Doctor. Strange",
    year: "2016",
    phase: "MCU Phase 3"
  },
  {
    quote: "No man can win every battle, but no man should fall without a struggle.",
    source: "Peter Parker",
    citation: "Spider-Man: Homecoming",
    year: "2017",
    phase: "MCU Phase 3"
  },
  {
    quote: "I am Iron Man.",
    source: "Tony Stark",
    citation: "Iron Man, Avengers: Endgame",
    year: "2008, 2019",
    phase: "MCU Phase 1, MCU Phase 3"
  },
  {
    quote: "I can do this all day.",
    source: "Steve Rogers",
    citation: "Captain America: The First Avenger",
    year: "2011",
    phase: "MCU Phase 1"
  },
  {
    quote: "That's my secret, Captain. I'm always angry.",
    source: "Bruce Banner",
    citation: "Avengers",
    year: "2012",
    phase: "MCU Phase 1"
  }
]



/***
 * `getRandomQuote` function will generate a random number based on the length of the quotesCollect array.
 *  After generating the random number the function will then generate the corresponding quote using the random number as the index.
 * this will then save to the randomQuote variable.
***/
function getRandomQuote() {
  const ranQuote = Math.floor(Math.random() * (quotesCollect.length))
  let randomQuote = quotesCollect[ranQuote]
  return randomQuote;
}
console.log(getRandomQuote());

/***
 * `ranColor` function generates a random hex number each time the function is called in the loop and ouputs the result as an Hex number i.e #5d5d5d;
 * code for random color change sourced from https://www.tutorialspoint.com/changing-color-randomly-in-javascript 
***/

function ranColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const random = Math.random();
    const bit = (random * 6) | 0;
    color += (bit).toString(16);
  }
  return color;
}

/***
 * `printQuote` function 
 * This function takes the randomly generated quote from the getRandomQuote function and becomes the variable quoteRandom.
 * The quoteRandom variable is then used to access the objects in the array i.e quoteRandom.source and output to  the text in the corresponding class areas randomly each time the 
 * button is clicked.
 * The document.body.style.background then accesses the ranColor() function to generate a random hex value for the background style on each loop.
***/



function printQuote() {
  let quoteRandom = getRandomQuote();
  let html = `<p class = "quote">` + quoteRandom.quote + '</p>'
  + `<p class = "source">` + quoteRandom.source 
  if ( quoteRandom.citation){
    html += `<span class= "citation">` + quoteRandom.citation + `</span>`
  }
  if ( quoteRandom.year) {
    html += `<span class= "year">` + quoteRandom.year + `</span>`
  }
  if ( quoteRandom.phase) {
    html += `<span class= "phase">` + quoteRandom.phase + `</span>`
  }
  
  html += `</p>`;
  document.body.style.background = ranColor();
  return document.getElementById('quote-box').innerHTML = html;

  
}
// setInterval sets the timing for each time the quote is automatically refreshed by running the printQuote function every 10 secs.
setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);