"use strict";
let myNodeList = document.getElementsByTagName("li");
let i;
for (i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
let k;
for (k = 0; k < close.length; k++) {
  close[k].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Поле не может быть пустым!!!!!!!!");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";  
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
