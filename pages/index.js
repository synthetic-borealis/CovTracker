import Button from "../components/Button.js";

const buttons = document.querySelectorAll(".button");
const buttonIDs = [];
buttons.forEach((button, index) => {
  buttonIDs[index] = button.id;
});

buttonIDs.forEach((buttonID) => {
  if (buttonID.length > 0) {
    const buttonElement = new Button(buttonID);
    buttonElement.setEventListeners();
  }
});
