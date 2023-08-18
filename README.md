# Kenzie Academy Challenge: Maze

Follow the instructions provided on my.kenzie.academy for this challenge. The `code.js` file is a placeholder. Feel free to rename it add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

1. First add some divs to your HTML that you can grab in the JS. You will need three to start with and they will be the maze selection, start button, and the maze container.

2. Assign a variable to your first maze map, then assign another variable to contain your player position. This will be an object with the row and column starting with a value of 0 for each.

3. Create a function to render the maze to the page, set the maze container to an empty string using inner HTML to clear the page from any previous maze. Create a for loop to loop through the row of the maze maps length and then create a nested for loop to loop through the columns and rows of the maze. Then create a div to hold the cells in the HTML. Make an if statement to check the maze layout's row and column for a W and if one is found add the classlist name of wall. The next else if statement will check and see if there is an empty string and if so add a classlist of floor. Add another if else statement to check for and S and add a start classlist, then update the player position variable to the row and column. The last else if will be to check for an F for finish, then if found add a classlist of finish. Then append the cell div to the maze container from the HTML.

4. Make a function to update the players position and first assign a variable to access the individual cells in the grid, and then call the player position variable row and calculate the index of the cell in the array of cells based on the players row and column position. Take that variable and add a classlist of player so the CSS will apply to the cell the player is located on.

5. Create a function to remove the players position, first assigning a variable to access the individual cells in the grid, and then call the player position variable row and calculate the index of the cell in the array of cells based on the players row and column position. Take that variable and remove the classlist of the player so the CSS will no longer apply to the cell the player is located on.

6. Then create a moving player function that takes in a parameter of the direction the player is moving. Assign two new variables to calculate the new row and column position of the player based on the provided direction. Then make an if statement that checks if the new row position is not outside the top boundary and not outside the lower boundary, and that the new column position is not outside the left boundary and check that it is not outside the right boundary. Also, check to make sure it is not a "W" for the wall. If all the conditions are met the player can move to the new position and remove the current player position and then update the new player position row and column and then call the update player position function. Then add a final if statement to this move player function and check to see if the player position, row and column, is on the "F" for finish and if so display the win message.

7. Create a display win function to display the message when the player wins the maze. Start by creating a new div and then adding the text content to the div for the winning message. Then append your message to the maze container.

8. Grab the start button variable name and add an event listener to the button, add a click event and an arrow function with an if statement to check and see if the user has selected the maze 1 or maze 2 value and update the maze layout, then call the render maze function before the end of the function but outside of the if statement.

9. On the document element, add an event listener that listens for the user to press on the arrow functions and move the player position based on which direction key is pressed. Here you will call the move player function that takes in the direction as the parameter and depending on which direction arrow is pressed, call the move player function and pass in an object as the parameter with the key-value pair of the row and col.

10. Finally, call your render maze function and style as desired.

## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(Put your reflection answer here.)_

I attempted many different approaches on first how to render the graph. The first try on this maze to clear the contents of the HTML by creating a variable for the maze HTML and setting it to an empty string. Then I still did the nested for loop but before the if statements I created another variable for the cell class. Then I used that variable to add the classes after checks for the w, "", s and f and then used a template literal to add the class to the maze HTML. Then updated the container using inner HTML and assigned it to the maze HTML variable. I chose to use append child instead of this version to keep it consistent with what I used throughout the other functions. I also tried a couple of different ways to display the message and the disadvantage of how I have it currently is the styling and that the user may miss the message. I am working on a different way or position to display the winning message so it is more visible to the user.

\*\*\* reference(s): https://www.w3schools.com/tags/tag_label.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
