# News Beast

News Beast is an interactive full-stack web app that provides to user with the latest sports, politics, business and art news. In addition app lets user to get a top news for specific date, like user's birthday.

## Screenshots


LANDING PAGE:

![image](https://github.com/hero931/wellness-organizer-node-capstone/blob/master/github-images/landing-page.png)


SPORTS PAGE:

![image](https://github.com/hero931/wellness-organizer-node-capstone/blob/master/github-images/login-page.png)


ART PAGE:

![image](https://github.com/hero931/wellness-organizer-node-capstone/blob/master/github-images/dashboard-page.png)


POLITICS PAGE:

![image](https://github.com/hero931/wellness-organizer-node-capstone/blob/master/github-images/champion-page.png)


BUSINESS PAGE:

![image](https://github.com/hero931/wellness-organizer-node-capstone/blob/master/github-images/results-page.png)


RESULTS PAGE:

![image](https://github.com/hero931/wellness-organizer-node-capstone/blob/master/github-images/results-page.png)

## Use Case
A bit different approach to see the news based on interest, instead of having mess of all the news on landing page. This way user can focus on specific interest and see all the related news. Having an option for user to be somehow interacted

## Initial UX

AS A VISITOR, NOT LOGGED IN

* As an initial visitor I want to land and see what the app is about so I can understand what the app does.

* As a visitor, I want to create a new account so that I can use the app.
(LANDING PAGE--wireframe will have title, details about logging in and what the app is about)

![image](https://user-images.githubusercontent.com/31460531/38281464-b9378a54-3778-11e8-86cd-483168b65aa6.png)

* As a visitor, I want to be able to create an account.

* As a visitor who has already created an account, I want to log in so that I can access my account.

AS A LOGGED-IN USER

* As a user, I want to be able to use or manipulate with the information about nutrition, workout, progress and notes.

![image](https://user-images.githubusercontent.com/31460531/38281511-da1a1a70-3778-11e8-8649-41b018881a1f.png)

* As a user, I want to view an example of workout "Champion" page.

![image](https://user-images.githubusercontent.com/31460531/38281544-002a7b42-3779-11e8-95cf-d60b55b107b2.png)

* As a user, I want to be able to see the records of my workout and nutrition page.
* As a user, I want to be able to delete information about my records.

![image](https://user-images.githubusercontent.com/31460531/38281559-1dae963a-3779-11e8-985d-ae2083112d30.png)


## Working Prototype
Find a working prototype with Node at https://news-fullstack-capstone.herokuapp.com/.

## Functionality
When set up an account, user will be taken to Dashboard page, where will be given an option to add wellness program (nutrition, workout, progress). In addition, Dashboard page will provide with optional basic examples of nutrition and workout for user. Champion page will provide with workout examples at different levels that user can have at his/her workout program. Information that user added to his/her program will be shown at Records page as separate nutrition, workout, progress sections.

### Front End
* HTML5
* CSS3
* JavaScript
* jQuery

### Back End
* Node.js
* Express.js
* MongoDB
* Mongoose
* mLab database
* Mocha and Chai for testing

### Responsive
* The app is responsive and optimized for both desktop and mobile viewing and use.

## API Documentation
API endpoints for the back end include:
* POST to '/users/create' for creating a new user
* POST to '/users/signin' to sign in an existing user
* POST to '/nutrition/create' to add a new nutrition information
* POST to '/progress/create' to add a new progress information
* POST to '/workout/create' to add a new workout information
* GET to '/nutrition/get/:user' to get info about user
* GET to '/workout/get/:user' to get info about user
* GET to '/progress/get/:user' to get info about user
* DELETE to '/nutrition/:id' to delete a nutrition by ID
* DELETE to '/workout/:id' to delete a workout by ID
* DELETE to '/progress/:id' to delete a progress by ID

## Development Roadmap
Planned additional features and improvements will allow users to:
* Have an option to see the dates and time for previous records
* Have a blog page where users can share their experience

