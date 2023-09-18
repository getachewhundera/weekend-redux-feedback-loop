# Redux Feedback Loop

For this assignment, you will be creating a reflection/feedback form modeled after Prime's system. Feedback will be collected over 4 views. In a separate review page, display the current feedback values and a submit button. and when all steps are complete, your app will save the feedback in the database. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server. //done 

```
npm install//DONE
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```


//Notes: 
- Every question will need a component page.
    - 4 components/pages for form
        - QuestionOne: How are you feeling today?
            - h1- with question 
            - Input box 
            - sends to database 
            - Score pop up alert requiring an in put 
            - Next Button 
        - QuestionTwo: How well are you understanding the content?
            - h1- with question 
            - Input box 
            - sends to database 
            - Score pop up alert requiring an in put 
            - Next Button 
        - QuestionThree:How well are you being supported?
            - h1- with question 
            - Input box 
            - sends to database 
            - Score pop up alert requiring an in put 
            - Next Button 
        - QuestionFour:Any comments you want to leave?
            - h1- with question 
            - Input box
            - comment is optional no pop alert is needed.  
            - sends to database 
            - Next Button 
- Routes/links in app.jsx 
- Review page will access all the questions and answers
    - h1 Review Feedback- notice that youre on feedback page 
    - shows question summary/ your inputted scoure 
    - has submit button-  submit button is clicked, save the submission in the database. takes you to the submit sucess page. 

- Submission sucess Page
    - notice that your on this page 
    - Leave another feedback button that resets form
    - 


Stretch goal: 
- on Review page: Allow the user to go back to a previous step and change their score. You still need to disallow empty values!
    - Idea maybe have Go back button for every page. or edit button next to each question on review page that links to those pages. 
    - question pages will need an edit button or the ablility to be changed automatically 
    - 

- admin page: list all feedback entries 
    - uses /admin route
    - Feedback Results: notice is displayed at top 
    - feedback is displayed in table. 
        - Columns: Feeling, Comphrension, Support, Comments, Delete
            - Delete has an icon, when clicked deletes row from databse and removes it from the DOM 
            













### ADD NEW FEEDBACK

> NOTE: As a baseline requirement, you must use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.

The parts:
- How are you feeling today?
![feeling](wireframes/feeling.png)
- How well are you understanding the content?
![understanding](wireframes/understanding.png)
- How well are you being supported?
![support](wireframes/supported.png)
- Any comments you want to leave?
![comments](wireframes/comments.png)

While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.

### Input Validation

Each step should only allow the user to advance to the next step if a score was provided. Be sure to tell the user in some way that a value must be provided.

The `Comments` step does not need to be validated, an empty value is okay.

## THE REVIEW COMPONENT

The last step of the process will allow the user to review their feedback. Users are not able to change their input on this step or go back for Base Mode. 

![comments](wireframes/review-active.png)

## SUBMIT THE FEEDBACK

The `Review` step needs to have a submit button which will be clicked on to actually submit the completed feedback to the server.

When the submit button is clicked, save the submission in the database. The user should see a submission success page. They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.

![understanding](wireframes/page-five.png)


## STRETCH GOALS

> NOTE: These stretch goals are intended to be completed in order.

### UPDATE SCORES

Allow the user to go back to a previous step and change their score. You still need to disallow empty values!

### STYLING
Improve the styling of the app using Material-UI. This might include cards, snackbars, buttons, a nav bar, icons, and/or a theme. 

### ADMIN SECTION

- Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

![display feedback](wireframes/admin.png)

- Add the ability to flag an existing feedback entry for further review on the /admin view.

### DEPLOY
Deploy your project to Heroku. You'll need to read the special instructions for building and deploying with React. 
