//Create function to display favorite color.
function favColor(){
var favColor = document.getElementById("color");
var theOutput = document.getElementById("colorOut");
var color = favColor.value;
theOutput.value = "I think I look best in " + color + "!"
}
