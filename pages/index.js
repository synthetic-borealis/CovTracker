import Button from "../components/Button.js";
import Panel from "../components/Panel.js";

// News article panels
const vitaminANewsPanel = new Panel({panelID: "article-vitamin-a"});
vitaminANewsPanel.setEventListeners();
const vaccinationNewsPanel = new Panel({panelID: "article-vaccination"});
vaccinationNewsPanel.setEventListeners();

// News cards
const vitaminANewsButton = new Button({ buttonID: "vitamin-a-news-card" }, vitaminANewsPanel.open);
vitaminANewsButton.setEventListeners();
const vaccinationNewsButton = new Button({ buttonID: "vaccination-news-card" }, vaccinationNewsPanel.open);
vaccinationNewsButton.setEventListeners();

// Tip article panels
const maskTipPanel = new Panel({ panelID: "article-mask" });
maskTipPanel.setEventListeners();
const mythsTipPanel = new Panel({ panelID: "article-covid-myths" });
mythsTipPanel.setEventListeners();

// Tip cards
const maskButton = new Button({ buttonID: "wear-mask-card" }, maskTipPanel.open);
maskButton.setEventListeners();
const mythsButton = new Button({ buttonID: "myths-card" }, mythsTipPanel.open);
mythsButton.setEventListeners();
