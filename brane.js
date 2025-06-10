let money = 0; 
let clickValue = 1;
let cursorGeneration = 0;

const moneyElement = document.getElementById("money");
const clickButton = document.getElementById("click-btn");
const glassesUpgrade = document.getElementById("glasses-upgrade");
const mustacheUpgrade = document.getElementById("mustache-upgrade");
const computerUpgrade = document.getElementById("computer-upgrade");
const cursorUpgrade = document.getElementById("cursor-upgrade");

function updateMoney() {
  moneyElement.textContent = money;
}

function addMoney(amount) {
  money += amount;
  updateMoney();
}

function buyGlasses() {
  if (money >= 50) {
    clickValue += 1;
    money -= 50;
    updateMoney();
  }
}

function buyMustache() {
  if (money >= 200) {
    clickValue += 5;
    money -= 200;
    updateMoney();
  }
}

function buyComputer() {
  if (money >= 500) {
    clickValue += 10;
    money -= 500;
    updateMoney();
  }
}

function buyCursor() {
  if (money >= 100) {
    cursorGeneration += 1;
    money -= 100;
    updateMoney();
  }
}

function updateUpgradeButtonStates() {
  glassesUpgrade.querySelector("button").disabled = money < 50;
  mustacheUpgrade.querySelector("button").disabled = money < 200;
  computerUpgrade.querySelector("button").disabled = money < 500;
  cursorUpgrade.querySelector("button").disabled = money < 100;
}

setInterval(updateUpgradeButtonStates, 100);


clickButton.addEventListener("click", () => {
  addMoney(clickValue);
});


glassesUpgrade.querySelector("button").addEventListener("click", buyGlasses);
mustacheUpgrade.querySelector("button").addEventListener("click", buyMustache);
computerUpgrade.querySelector("button").addEventListener("click", buyComputer);
cursorUpgrade.querySelector("button").addEventListener("click", buyCursor);


setInterval(() => {
  if (cursorGeneration > 0) {
    addMoney(cursorGeneration);
  }
}, 1000);