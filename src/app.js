/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//Vamos a crear los arrays para generar las excusas
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

//Vamos a generar la excusas con la funcion
function generarExcusa(array) {
  let nuemroExcusa = Math.floor(Math.random() * array.length);

  let excusa = array[nuemroExcusa];

  return excusa;
}

//Vamos a gregar la etiqueta HTML al documento
document.getElementById("excuse").innerHTML =
  "<p>" +
  generarExcusa(who) +
  " " +
  generarExcusa(action) +
  " " +
  generarExcusa(what) +
  " " +
  generarExcusa(when) +
  "</p>";
