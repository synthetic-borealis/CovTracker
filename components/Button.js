import { buttonSettings } from "../utils/constants.js";

class Button {
  constructor({buttonID, buttonElement}, clickCallback) {
    this._buttonElement = buttonElement ? buttonElement : document.getElementById(buttonID);
    this._clickCallback = clickCallback;
  }

  _isEnabled = () => {
    return this._buttonElement.classList.contains(buttonSettings.activeButtonClass);
  };

  setEnabled = (isEnabled) => {
    if (isEnabled) {
      this._buttonElement.classList.add(buttonSettings.activeButtonClass);
    } else {
      this._buttonElement.classList.remove(buttonSettings.activeButtonClass);
    }
  };

  _onClick = () => {
    this.setEnabled(!this._isEnabled());
    if (typeof this._clickCallback === "function") {
      this._clickCallback();
    }
  }

  setEventListeners() {
    this._buttonElement.addEventListener("click", this._onClick);
  }
}

export default Button;
