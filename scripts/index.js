const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
};

const addLastName = () => {
  let userInput2 = document.querySelector("#userText2").value;
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput2);
  newLi.appendChild(text);
  document.querySelector(".return").appendChild(newLi);
  document.querySelector("#userText2").value = "";
};
