let money = 0;
let clickValue = 1;
let cursorGeneration = 0;
let coffeeGeneration = 0;
let internGeneration = 0;

let totalClicks = 0;
let totalMoneyEarned = 0;
let upgradesPurchased = 0;

let prestigeLevel = 0;
let prestigeMultiplier = 1;

// Initial prices for upgrades
let glassesPrice = 50;
let mustachePrice = 200;
let computerPrice = 500;
let cursorPrice = 100;
let coffeePrice = 350;
let internPrice = 1000;

// Prestige price scaling
let prestigePrice = 100000;  // Start at 100000 for the first prestige

// Scaling factor (15% increase per purchase)
const priceScalingFactor = 1.15;

const moneyElement = document.getElementById("money");
const clickButton = document.getElementById("click-btn");
const glassesUpgrade = document.getElementById("glasses-upgrade");
const mustacheUpgrade = document.getElementById("mustache-upgrade");
const computerUpgrade = document.getElementById("computer-upgrade");
const cursorUpgrade = document.getElementById("cursor-upgrade");
const coffeeUpgrade = document.getElementById("coffee-upgrade");
const internUpgrade = document.getElementById("intern-upgrade");
const prestigeButton = document.getElementById("prestige-btn");

function updateMoney() {
  moneyElement.textContent = `${Math.round(money)} (Total Clicks: ${totalClicks} | Total Earned: $${Math.round(totalMoneyEarned)})`;
}

function addMoney(amount) {
  money += amount;
  totalMoneyEarned += amount;
  updateMoney();
}

function buyGlasses() {
  if (money >= glassesPrice) {
    clickValue += 1;
    money -= glassesPrice;
    glassesPrice *= priceScalingFactor; // Scale the price
    updateMoney();
    updateUpgradePrices();
  }
}

function buyMustache() {
  if (money >= mustachePrice) {
    clickValue += 5;
    money -= mustachePrice;
    mustachePrice *= priceScalingFactor; // Scale the price
    updateMoney();
    updateUpgradePrices();
  }
}

function buyComputer() {
  if (money >= computerPrice) {
    clickValue += 10;
    money -= computerPrice;
    computerPrice *= priceScalingFactor; // Scale the price
    updateMoney();
    updateUpgradePrices();
  }
}

function buyCursor() {
  if (money >= cursorPrice) {
    cursorGeneration += 1;
    money -= cursorPrice;
    cursorPrice *= priceScalingFactor; // Scale the price
    updateMoney();
    updateUpgradePrices();
  }
}

function buyCoffee() {
  if (money >= coffeePrice) {
    coffeeGeneration += 3;
    money -= coffeePrice;
    coffeePrice *= priceScalingFactor; // Scale the price
    updateMoney();
    updateUpgradePrices();
  }
}

function buyIntern() {
  if (money >= internPrice) {
    internGeneration += 5;
    money -= internPrice;
    internPrice *= priceScalingFactor; // Scale the price
    updateMoney();
    updateUpgradePrices();
  }
}

function resetGame() {
  if (money >= prestigePrice) {
    money -= prestigePrice; // Deduct prestige cost
    prestigeLevel += 1;
    prestigeMultiplier *= 1.5;
    
    // Reset upgrades and reset the game
    clickValue = 1;
    cursorGeneration = 0;
    coffeeGeneration = 0;
    internGeneration = 0;
    totalClicks = 0;
    totalMoneyEarned = 0;
    upgradesPurchased = 0;
    
    prestigePrice *= 2;  // Double the price for the next prestige
    updateMoney();
    updateUpgradePrices();
    updatePrestigeButton();
  }
}

function updateUpgradeButtonStates() {
  glassesUpgrade.querySelector("button").disabled = money < glassesPrice;
  mustacheUpgrade.querySelector("button").disabled = money < mustachePrice;
  computerUpgrade.querySelector("button").disabled = money < computerPrice;
  cursorUpgrade.querySelector("button").disabled = money < cursorPrice;
  coffeeUpgrade.querySelector("button").disabled = money < coffeePrice;
  internUpgrade.querySelector("button").disabled = money < internPrice;
}

function updateUpgradePrices() {
  glassesUpgrade.querySelector("p").textContent = `Cost: $${Math.round(glassesPrice)}`;
  mustacheUpgrade.querySelector("p").textContent = `Cost: $${Math.round(mustachePrice)}`;
  computerUpgrade.querySelector("p").textContent = `Cost: $${Math.round(computerPrice)}`;
  cursorUpgrade.querySelector("p").textContent = `Cost: $${Math.round(cursorPrice)}`;
  coffeeUpgrade.querySelector("p").textContent = `Cost: $${Math.round(coffeePrice)}`;
  internUpgrade.querySelector("p").textContent = `Cost: $${Math.round(internPrice)}`;
}

function updatePrestigeButton() {
  prestigeButton.textContent = "Prestige: $${Math.round(prestigePrice)}";
}

clickButton.addEventListener("click", () => {
  totalClicks += 1;
  addMoney(clickValue);
});

glassesUpgrade.querySelector("button").addEventListener("click", buyGlasses);
mustacheUpgrade.querySelector("button").addEventListener("click", buyMustache);
computerUpgrade.querySelector("button").addEventListener("click", buyComputer);
cursorUpgrade.querySelector("button").addEventListener("click", buyCursor);
coffeeUpgrade.querySelector("button").addEventListener("click", buyCoffee);
internUpgrade.querySelector("button").addEventListener("click", buyIntern);
prestigeButton.addEventListener("click", resetGame);

setInterval(() => {
  if (cursorGeneration > 0) {
    addMoney(cursorGeneration);
  }
  if (coffeeGeneration > 0) {
    addMoney(coffeeGeneration);
  }
  if (internGeneration > 0) {
    addMoney(internGeneration);
  }
}, 1000);

setInterval(updateUpgradeButtonStates, 100);
