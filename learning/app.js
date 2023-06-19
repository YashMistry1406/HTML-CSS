const op = document.querySelector("#butt");

op.addEventListener("click", function () {
  document.getElementById("p").innerHTML = "button clicked";
});

const alert = document.getElementById("alert");
alert.addEventListener("click", function () {
  window.alert("Clicked a wrong link ");
});

let greeting = "Namaskar mitron";

function greet() {
  greeting = "aight there mate";
  console.log(greeting);
}

console.log(greet());
console.log(greeting);

let text =
  "Heads up! We have identified and fixed an issue with the new streak hour offset which \
   would reset its value after one test. Please set your streak hour offset again if needed.";

console.log(text.indexOf("up"))


let array = [1,2,3,4,5,6,6,7,8,9]
console.log("Array length"+"\t" +array.length)