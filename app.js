// import fun from "./fun.js";
import fun, { mark } from "./fun.js";

var h1 = document.createElement("h1");

h1.innerHTML = "Hello Jee!";

document.body.appendChild(h1);

console.log(h1, fun, mark);
