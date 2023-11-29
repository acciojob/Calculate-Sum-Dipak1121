//your JS code here. If required.
let body = document.querySelector("body");
let h1 = document.getElementById("heading");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let btn = document.getElementById("sum_btn");
btn.addEventListener("click", onClick);
function onClick(){
	let para = document.createElement("p");
	para.innerText = eval(`${n1.value}+${n2.value}`);
	body.appendChild(para);
}