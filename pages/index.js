import Button from "../components/Button.js";

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  const buttonElement = new Button({buttonElement: button});
  buttonElement.setEventListeners();
});
