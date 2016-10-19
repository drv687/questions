//Create user input function
function userGreeting(){
var firstName = document.getElementById("firstname");
var theOutput = document.getElementById("output");
var name = firstName.value;
theOutput.value = "Welcome " + name + "!"
}
