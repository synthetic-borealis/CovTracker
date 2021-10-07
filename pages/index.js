import Button from "../components/Button.js";
import Panel from "../components/Panel.js";

// News article panels
const vitaminANewsPanel = new Panel({panelID: "article-vitamin-a"});
vitaminANewsPanel.setEventListeners();

// News cards
const vitaminANewsButton = new Button({ buttonID: "vitamin-a-news-card" }, vitaminANewsPanel.open);
vitaminANewsButton.setEventListeners();
