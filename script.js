let convertBtn = document.querySelector(".convertBtn");
convertBtn.addEventListener("click", function () {
  let fromUnit = document.querySelector("#fromBox").value;
  let toUnit = document.querySelector(".toDiv select").value;
  let tempValue = parseFloat(document.querySelector(".inputBox").value);
 
  if (!isNaN(tempValue) && fromUnit !== "Select" && toUnit !== "Select") {
    let result;
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      result = (tempValue * 9) / 5 + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      result = ((tempValue - 32) * 5) / 9;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
      result = tempValue + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
      result = tempValue - 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
      result = ((tempValue - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
      result = ((tempValue - 273.15) * 9) / 5 + 32;
    } else if (fromUnit === "Rankine" && toUnit === "Kelvin") {
      result = (tempValue * 5) / 9;
    } else if (fromUnit === "Réaumur" && toUnit === "Celsius") {
      result = (tempValue * 5) / 4;
    } else {
      result = tempValue;
    }
    
    let resultBox = document.querySelector(".resultBox");
    let h2 = document.createElement("h2");
    h2.textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
    resultBox.appendChild(h2);
  } else { 
    alert("Please enter a valid temperature and select units for conversion."); 
  }
});
