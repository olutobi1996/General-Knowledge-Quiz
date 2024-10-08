# Quiz Game
 Quiz game is a site that hopes to demonstrate how pure JavaScript works in a real-world context. The site will be targeted toward people who not only love to implement more advanced JavaScript concepts but also general knowledge questions. Quiz Game is a fully responsive JavaScript Quiz Game that will allow users to challenge their general knowledge. It does this by asking the user of the website 6 random general knowledge quiz questions.

![Screenshot-General-Knowledge-Quiz]


### Existing Features

The Quiz Game Logo and Heading

Featured at the top of the page, the Quiz Game logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game.




- __The Question Section__

-This section will allow the user to play the quiz game. The user will be able to easily see the questions for the quiz game.
-The user will be able to select the question answer of there choice below the question.

![image](https://github.com/user-attachments/assets/e194f77f-00c3-4e7d-b604-edcba58b186c)


-  __The Game Area__

-The question section is where the user will be able to see the general knowledge quiz questions to answer as part of the game. The user will be able answer the questions in the answer box provided as multiple choice.
-The user will be able to submit their answer by clicking there question of choice and a flash of green or red will make it known to the user if they answered correctly.
-Theres also a next button for the user to click to move to the next question.

![image](https://github.com/user-attachments/assets/0b38fa59-b367-4ada-8c89-69e98f1b66c4)


- __The Score Area__

-This section will allow the user to see exactly how many correct and incorrect answers they have provided out of 8, with the correct answer button turning green and incorrect answer button will turn red.

![image](https://github.com/user-attachments/assets/715ab0b9-b295-4686-88b7-59ec0610f664)

 __Restart Quiz Button__
-This section will allow the user to see to have a choice at the end of the game when they have had there scored appear to choose wether they would like to restart the quiz or not.



 __Quiz Timer__

-This section the user will see a timer count down from 60seconds and will have this amount of time to finish the quiz otherwise an alert will appear.




__Alert Message__
- When the user has ran out of time a pop up message saying "Sorry You Have Ran Out Of Time" will appear on the quiz at the top and there time has ran out.



__Footer__
- I have added my personal details with my name and email at the bottom of the quiz for anybody who would like to speak to me personally about the game and is interested in my work.



### Features Left to Implement

- Another feature idea for the future of the website is to do add more questions if the user gets them all correct.

## Testing 

- The website has been tested numerous times to make sure the user has an easy and enjoyable experience, along the project i opened the website in the browser and used devtools to check everything was running smoothly. I Also used console.log to make sure certain elements of the quiz were being logged and working with the computer.

## Questions & Answers
- Starting with the questions and answers, i had a slight issue at the start with displaying the answers as during the start i had both the answer buttons i created in html and also there answers i had created in javascript, after putting the answers into the correct function i was able to over come this.
- 
## Submit Button
- I then also had issues with my submit button, i was able to display the submit button in the browser but it wouldnt work, I overcame this problem by instead of a submit button i used an event listner when the user clicked there answer along with display/block so that the user wasnt able to change there answer once chosen.

### Updated Quiz Game
- This new version of my quiz game has been updated newer version for the users, with a header element at the top of the page and below the header i have included a quiz game icon, below that we have the questions of the quiz with new questions. Below the questions we have an updated score with different color format and also a timer of 60seconds for the user to complete the quiz, with a message that pops up and alerts the user when time has ran out. To finish off at the bottom of the page there is my personal details within the footer element for any user who would like to get in contact and see my other work.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator]https://validator.w3.org/nu/?doc=https%3A%2F%2Folutobi1996.github.io%2FGeneral-Knowledge-Quiz%2F
- CSS
  - No errors were found when passing through the official [(Jigsaw)]https://jigsaw.w3.org/css-validator/validator?uri=+https%3A%2F%2Folutobi1996.github.io%2FGeneral-Knowledge-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

- JavaScript
No errors were found when passing through the official Jshint validator
The following metrics were returned:
There are 7 functions in this file.
Function with the largest signature take 1 arguments, while the median is 0.
Largest function has 9 statements in it, while the median is 5.

The most complex function has a cyclomatic complexity value of 2 while the median is 2.

### Unfixed Bugs
There were no unfixed bugs in the final code but for days i had "favicon error" in devtools as i havent added a favicon for this project as there were no icons necessary. Also in JSHint there were version errors found, if the software was not up to date the javascript on that particular machine may not work.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the main branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://olutobi1996.github.io/General-Knowledge-Quiz/


## Credits 


### Content 

- The layout style was inspired by(https://www.youtube.com/watch?v=PBcqGxrr9g8) & (https://codeinstitue.com/)
- The text styling was used from https://fonts.google.com/
- General Knowledge Quiz Questions were made up by me

### Media

- Both of the photos used on the page are used from https://www.pexels.com/
- This site is a free image website
