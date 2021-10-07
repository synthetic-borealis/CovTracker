import Button from "./Button.js";
import { panelSettings, buttonSettings } from "../utils/constants.js";

class Panel {
  constructor({panelID, panelElement, contentElement}) {
    this._panelElement = panelElement ? panelElement : document.getElementById(panelID);
    this._closeButton = new Button({
      buttonElement: this._panelElement.querySelector(`.${buttonSettings.buttonClass}`)
    });
  }

  open = () => {
    this._panelElement.classList.add(panelSettings.activePanelClass);
  };

  close = () => {
    this._panelElement.classList.remove(panelSettings.activePanelClass);
  };

  setEventListeners() {
    this._closeButton.setClickCallback(this.close);
    this._closeButton.setEventListeners();
  }
}

export default Panel;
