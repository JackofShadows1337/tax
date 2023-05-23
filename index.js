function calculateTax() {
	var power = parseInt(document.getElementById("power").value);
	var monthsOwnership = parseInt(document.getElementById("monthsOwnership").value);
	var luxuryCar = document.getElementById("luxuryCar").checked;
 
	// Задаем максимальное значение владения ТС в 12 месяцев
	if (monthsOwnership > 12) {
	  monthsOwnership = 12;
	}
 
	var taxRate = 0;
	var baseTax = 0;
 
	if (power <= 100) {
	  taxRate = 12;
	} else if (power <= 125) {
	  taxRate = 25;
	} else if (power <= 150) {
	  taxRate = 35;
	} else if (power <= 175) {
	  taxRate = 45;
	} else if (power <= 200) {
	  taxRate = 50;
	} else if (power <= 225) {
	  taxRate = 65;
	} else if (power <= 250) {
	  taxRate = 75;
	} else {
	  taxRate = 150;
	}
 
	if (luxuryCar) {
	  baseTax = taxRate * power * monthsOwnership / 12 * 1.5;
	} else {
	  baseTax = taxRate * power * monthsOwnership / 12;
	}
 
	var resultContainer = document.getElementById("resultContainer");
	resultContainer.innerHTML = "Транспортный налог: " + baseTax.toFixed(2) + " рублей";
 }
 
 document.getElementById("taxCalculatorForm").addEventListener("submit", function(event) {
	event.preventDefault();
	calculateTax();
 });
  