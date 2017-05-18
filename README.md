# Intro to Node (PART I - How does it work?)

This workshop was hosted by SheCodesNow: https://www.meetup.com/She-Codes-Now/ 

Instructor: @alequetzalli & John C.



# What will I need to install? 
(1) A sample code editor you can download is Sublime. Go to https://www.sublimetext.com/3.

If you already have Sublime installed on your machine, you don't have to install this version. Choose the OS X or Windows depending on which operating system you have. 

(2) Download Node: https://nodejs.org/en/


# Or ... you can use Cloud9 (http://c9.io)
(1) Create a new project and clone this repo 


(2) Use the terminal to upgrade to Node Version 6
```bash
nvm install 6
nvm alias default 6
```

(3) Install dependencies
```bash
npm install
```

(4) Start the server by opening the "server.js" file and clickign the "Run" button


# Copy and Paste Code to follow along with (in router/main.js)

(Phase 1) Hard Coded "Hello!"  (http://.../)

```javascript
module.exports = function(app) {
     app.get('/',function(req,res){
        res.send("Hello!");
     });
}

```

(Phase 2) Use a service to get something else to say (http://.../phase2)
```javascript
// At the top of the file
var hello = require("../services/hello-world.js"); 

// Below the phase1 "app.get() function"
     app.get('/phase2',function(req,res){
          var greeting = hello.getGreeting();
          var name = hello.getName();
          res.send(greeting + ", " + name);
     });
     
```

(Phase 3) Use a template to feed data dynamically (http://.../phase3)
```javascript

// Below the phase2 "app.get() function"
     app.get('/phase3',function(req,res){
          var greeting = hello.getGreeting();
          var name = hello.getName();
          var viewModel = {
               greeting: greeting,
               name: name,
               message: `${greeting}, ${name}`
          }
          res.render("index.html", viewModel);
     });
     
```

(Phase 4) Personalize it with parameters! (http://.../phase4?greeting=Hi&name=Alejandra)
```javascript

// Below the phase3 "app.get() function"
     app.get('/phase4',function(req,res){
          var greeting = hello.getGreeting(req.query.greeting);
          var name = hello.getName(req.query.name);
          var viewModel = {
               greeting: greeting,
               name: name,
               message: `${greeting}, ${name}`
          }
          res.render("index.html", viewModel);
     });
     
```
