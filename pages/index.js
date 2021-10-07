import Button from "../components/Button.js";
import Panel from "../components/Panel.js";

const testPanel = new Panel({panelID: "test-panel"});
testPanel.setEventListeners();
const openButton = new Button({ buttonID: "menu-button" }, testPanel.open);
openButton.setEventListeners();
