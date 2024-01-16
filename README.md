Poller Place
----------------------------------------

An application in which users can infinitely participate in other user-created polls 

----------------------------------------
MAIN FUNCTIONALITY

There is a login page and signup page in which users can enter the following information:

Login Page:
- Email
- Password

Signup Page:
- Email
- Username
- Password
----------------------------------------
TO BE IMPLEMENTED

Users can sign up, which will create a user in the backend. 
They can then log in to the home page to view other users' polls in "reels" like fashion.
Users can also create polls via a button on the homepage

They will have the option to create different types of polls:
- Normal polls -- polls that do not have images and are not timed
- Polls with images -- polls that have images to help describe the answers or the question
- Timed polls



----------------------------------------
Developed using test-driven development

Tech Stack:
- Backend: Golang with Gin framework
- Frontend: SvelteKit

Both are setup with unit testing capabilities
- The backend uses Golang's built-in testing library
- The frontend uses a combination of Jest and Svelte testing library

----------------------------------------
HOW TO RUN

Svelte Frontend:

    Navigate to the pp-frontend directory and type "npm run dev" into the terminal

    Type "npm test" to run the tests

Golang Backend:

    Navigate to ./pp-backend/main directory and type "go build" to create the exe and then type "./main.exe"

    Type "go test" to run the tests


When both of these are started, navigate to "http://localhost:5173/authenticate/login" in the web browser

----------------------------------------

EXPERIMENTAL

Navigate to the frontend directory and type "npm run cypress:open" to open Cypress
