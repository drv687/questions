//Create function to display favorite food.
function favFood(){
var favFood = document.getElementById("favefood");
var theOutput = document.getElementById("theOutput");
var food = favFood.value;
theOutput.value = "I like to eat " + food + "!"
}
