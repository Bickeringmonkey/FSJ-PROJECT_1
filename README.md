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
        <li>Create another variable to store the HTML string. Set it equal to a string containing two 'p' elements.</br>
        <ol>
            <li>The first p element should have a class equal to “quote”, and the random quote object’s .quote property nested between the opening and closing p tags.</li>
            <li>The second p element should have a class equal to “source”, and the random quote object’s .source property nested between the tags.</li>
        </ol>
        </li>
    </ol>
 </li></br>
 <li><strong>Create two separate if statements below the variables.</strong>You will need to add decision making to this function:
    <ol>
        <li>If the random quote object has a citation property, concatenate a span element with the class "citation" to the HTML string.</li>
        <li>If the random quote object has a year property, concatenate a span element with the class "year" to the HTML string.</li>
    </ol>
 </li>
 <li>Below the if statements, complete the string by concatenating a closing p tag to the HTML string. This is the closing tag for the second paragraph with the class source.</li></br>
 <li>Lastly, set the printQuote function to return the full HTML string displaying a random quote.</li></br>
 </ol>
<h2>Extra Credit</h2>
<li><strong>Additional quote object property</strong>
<p>Printed quotes display an additional property that adds context. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize a quote.</p>
    <ol>
        <li>Add at least one extra property to at least one quote object.</li>
        <li>Add the new property to the HTML string similarly to how you added the “year” and “citation” properties.</li>
    </ol>
</li></br>
<li><strong>Random background colors</strong>
<p>When a new quote prints to the page, the background color changes to a random color.</p>
    <ul>
        <li>Create a function that updates the background color to a random color.</li>
    </ul>
</li>