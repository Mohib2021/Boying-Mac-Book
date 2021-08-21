// Declaring common variables.
const memory8GB = document.getElementById("memory-8gb");
const memory16GB = document.getElementById("memory-16gb");
const ssd256GB = document.getElementById("ssd-256gb");
const ssd512GB = document.getElementById("ssd-512gb");
const ssd1TB = document.getElementById("ssd-1tb");
const freeDelivery = document.getElementById("free-delivery");
const costDelivery = document.getElementById("cost-delivery");
const applyBtn = document.getElementById("apply-btn");
const promoCodeInput = document.getElementById("promo-code-input");

// all event handlers which call updateCost function individually.
memory8GB.addEventListener("click", function () {
	updateCost("memory", false);
});

memory16GB.addEventListener("click", function () {
	updateCost("memory", true);
});

ssd256GB.addEventListener("click", function () {
	updateCost("storage", false);
});
ssd512GB.addEventListener("click", function () {
	updateCost("storage", 100);
});

ssd1TB.addEventListener("click", function () {
	updateCost("storage", true);
});

freeDelivery.addEventListener("click", function () {
	updateCost("delivery", false);
});

costDelivery.addEventListener("click", function () {
	updateCost("delivery", 20);
});

// updating cost of each hardware according to the requirements.
function updateCost(costFor, shouldChange) {
	const hardwareCost = document.getElementById(costFor + "-cost");
	let hardwareCostMoney = parseInt(hardwareCost.innerText);
	if (!shouldChange) {
		hardwareCostMoney = 0;
		hardwareCost.innerText = hardwareCostMoney;
	} else if (shouldChange == 100) {
		hardwareCostMoney = shouldChange;
		hardwareCost.innerText = hardwareCostMoney;
	} else if (shouldChange == 20) {
		hardwareCostMoney = shouldChange;
		hardwareCost.innerText = hardwareCostMoney;
	} else {
		hardwareCostMoney = 180;
		hardwareCost.innerText = hardwareCostMoney;
	}
	// after getting all the individual hardware cost, I updated total cost.
	updateTotal();
}

// in updateTotal function I called getMoney function to converting string into integer.
function updateTotal() {
	const bestPrice = getMoney("best-price");
	const memoryCost = getMoney("memory-cost");
	const storageCost = getMoney("storage-cost");
	const deliveryCost = getMoney("delivery-cost");
	const total = bestPrice + memoryCost + storageCost + deliveryCost;
	const totalPrice = document.getElementById("total-price");
	totalPrice.innerText = total;
	const finalPrice = document.getElementById("final-price");
	finalPrice.innerText = total;
}

// converting string to an integer.
function getMoney(backMoney) {
	const price = document.getElementById(backMoney);
	const priceMoney = parseInt(price.innerText);
	return priceMoney;
}

// applying promo code to get 20% discount
applyBtn.addEventListener("click", function () {
	const promoCodeValue = promoCodeInput.value.toLowerCase();
	const bonusTotal = getMoney("final-price");
	const bonusCal = (bonusTotal / 100) * 20;
	const theFinalTotalPrice = bonusTotal - bonusCal;
	if (promoCodeValue === "stevekaku") {
		document.getElementById("final-price").innerText = theFinalTotalPrice;
		promoCodeInput.value = "";
	}
});
