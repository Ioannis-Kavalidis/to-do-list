let colorGenerator = () => {
  let characters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * characters.length)];
  }
  color += "50"; // transparency
  return color;
};

const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  if (userInput == "") {
    return alert("Please write something");
  }
  let newLi = document.createElement("li");
  let NodeText = document.createTextNode(userInput);
  newLi.appendChild(NodeText);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
  let list = document.querySelectorAll("li:nth-child(odd)");
  list.forEach(({ style: item }) => {
    item.backgroundColor = colorGenerator();
  });
  let span = document.createElement("span");
  let text = document.createTextNode("bla");
  span.className = "close";
  span.appendChild(text);
  let listAll = document.querySelectorAll("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });
};

// .............................
const addLastName = () => {
  let userInput2 = document.querySelector("#userText2").value;
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput2);
  newLi.appendChild(text);
  document.querySelector(".return").appendChild(newLi);
  document.querySelector("#userText2").value = "";
};
