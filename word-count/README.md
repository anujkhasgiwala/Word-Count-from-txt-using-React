## Problem Statement
Create a single page app using React and JSX with following functionality:
Markup : 
1. The app should have a file upload input control that will allow the user to upload a text file.
2. When the text file is uploaded, the app should create an array of the words in the file.
3. The app should render a <div> tag and inside the <div> tag it should render <span> tags with each word from the text file. Each span should have a hover affect that highlights the word, and an onclick event updates a label on the page indicating the last word that was clicked on as well as it’s position in the file. (The label could say something like… Clicked on the word “Sample” which is the 5th word in the file)
4. The div tag should fill the remainder of the page below the upload input. The div tag should allow for scrolling if the span tags fill up the page. The span tags should be spaced with margins or padding so that they are readable.