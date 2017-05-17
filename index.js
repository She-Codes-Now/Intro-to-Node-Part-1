
var hello = require("./services/hello-world.js");

var greeting = hello.getGreeting(); 
var name = hello.getName('Fred');

console.log(`${greeting}, ${name}`);