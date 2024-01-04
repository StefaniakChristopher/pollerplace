Poller Place
----------------------------------------

An application in which users can infinitely participate in other user-created polls 

----------------------------------------
MAIN FUNCTIONALITY

There is a login page and signup page in which users can enter the following infromation:

Login Page:
- Email
- Password

Signup Page:
- Email
- Username
- Password
----------------------------------------
TO BE IMPLEMENTED

Users can signup, which will create a user in the backend
They can then login which will take them to the home page 



----------------------------------------
Developed using test driven development

Tech Stack:
- Backend: Golang with Gin framework
- Frontend: SvelteKit

Both are setup with unit testing capabilities
- The backend uses Golang's built-in testing library
- The frontend uses a combitnation of Jest and Svelte testing library

----------------------------------------
HOW TO RUN

Svelte Frontend:

Navigate to the pp-frontend directory and type "npm run dev" into the terminal

    Type "npm test" to run the tests

Golang Backend:

Navigate to ./pp-backend/main directory and type "go build" to create the exe and then type "./main.exe"

    Type "go test" to run the tests
