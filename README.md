# Reproduction of error with Cypress running app with pdfnetjs viewer running in iframe


## Steps to set up 
1. Run `npm install`
2. Run `npm run start` to run the development server

App runs on http://localhost/4200.

Visiting app in browser will display a PDF file.

Getting Cypress to visit the home page will cause an "Uncaught SyntaxError: Invalid or unexpected token" to be thrown in console and PDF will not display.
