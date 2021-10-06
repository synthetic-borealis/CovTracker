import { buttonSettings } from "../utils/constants.js";

class Button {
  constructor(buttonID, clickCallback) {
    this._buttonElement = document.getElementById(buttonID);
    this._clickCallback = clickCallback;
  }

  _onClick = () => {
    // TODO: find a better way to toggle this
    this._buttonElement.classList.toggle(buttonSettings.activeButtonClass);
    if (typeof this._clickCallback === "function") {
      this._clickCallback();
    }
  }

  setEventListeners() {
    this._buttonElement.addEventListener("click", this._onClick);
  }
}

export default Button;
