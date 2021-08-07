# Project One:- Random Quote Generator
 <h2>Motivation</h2>
 <p>This project has been created as part of the TreeHouse course modules for Full Stack Javascript. The idea is to create a Random Quote generator using Javascript.</p>
 <h2>Instruction</h2>
 <p>The Random Quote Generator must have the following included.</p>
 <ol>
 <li><strong>Create an array of objects to store data for your quotes</strong></li></br>
 <li><strong>Add data to your quote strings</strong>
    <ol>
        <li>quote - <i>string</i> - the actual quote</li>
        <li>source - <i>string</i> - the person or character who said it</li> 
        <li>Add a citation property to at least one quote object</li>
        <li>Add a year property to at least one quote object</li>
    </ol>
 </li></br>
 <li><strong>Create a getRandomQuote() function</strong>
    <ol>
    <li>Create a function called getRandomQuote.</li>
    <li>In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.</li>
    <li>Lastly, the function should return a random quote object using the random number variable above and bracket notation on the quotes array.</li>
    </ol>
 </li></br>
 <li><strong>Create the printQuote() function</strong> - You will program the printQuote function to perform three tasks: call the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.
 <ol>
 <li>In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function.</li>
 <li>Create another variable to store the HTML string. Set it equal to a string containing two 'p' elements.
 <ol>
 <li>The first &60;p&62; element should have a class equal to “quote”, and the random quote object’s .quote property nested between the opening and closing &60;p&62; tags.</li>
 </ol>
 </li>
 </ol>
 </li>
 </ol>
