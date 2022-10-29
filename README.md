# vendor-management
This repo contain full-stack code for simple vendor management system... both backend and front-end code. Built with Nodejs, Express, Handlebars template engine, node-cache and html and css. The cold structure is design to emulate MVC architecture design. 

** This project make used of the following modules **

 - Express Nodejs
 - Express Handlebars template engine
 - node-cache for RAM
 
** The project is structure in MVC achitecture **
 - Controller - contains all the project routes
 - Model - contain storage logic
 - View - contain html files

 - Public - consist of css, image and client.js file for manupulating DOM elements and connecting client side to server side

 ** Vendors folders consist of vendors files **

 - All files are loaded directly from the server
 - Any Item added to the file will be updated in the file storage on the server side
 - Any order made is save in the RAM and when server start again it refreshes the memory

To run the project use

npm start
or 
npm run dev

Jsdoc module was added to aid the documentation too

