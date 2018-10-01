# Reproduction of error with Cypress running app with pdfnetjs viewer running in iframe


## Steps to set up 
1. Run `npm install`
2. Run `npm run start` to run the development server

App runs on http://localhost/4200.

Visiting app in browser will display a PDF file.

Running Cyprus tests:

The first test visiting app root causes  an "Uncaught SyntaxError: Invalid or unexpected token" to be thrown in console and PDF will not display.

The second test going direct to the pdf viewer that is iframed in app is successul as error not thrown when viewer not iframed
