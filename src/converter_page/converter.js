
const conversionFactors = {
            // Volume conversion factors (approximate)
            "70": 1, // Cups (US)
            "201": 0.236588, // Cups (Metric)
            "158": 0.284131, // Cups (Imperial)
            "77": 10, // Deciliters [dL]
            "88": 0.0284131, // Fluid Ounces (UK) [fl oz]
            "71": 0.0295735, // Fluid Ounces (US) [fl oz]
            "84": 0.00454609, // Gallons (UK) [gal]
            "67": 0.00378541, // Gallons (US)
            "78": 0.001, // Liters [L]
            "74": 1000, // Milliliters [mL]
            "86": 0.568261, // Pints (UK) [pt]
            "69": 0.473176, // Pints (US) [pt]
            "85": 0.284131, // Quarts (UK) [qt]
            "68": 0.946353, // Quarts (US) [qt]
            "72": 16, // Tablespoons (US)
            "202": 20, // Tablespoons (Metric)
            "157": 17.7582, // Tablespoons (Imperial)
            "73": 48, // Teaspoons (US)
            "203": 5.91939, // Teaspoons (Metric)
            "262": 5.91939, // Teaspoons (Imperial)
            
            // Weight conversion factors (approximate)
            "99": 1, // Grams [g]
            "102": 0.001, // Kilograms [kg]
            "91": 0.035274, // Ounces [oz]
            "90": 0.00220462, // Pounds [lb]
        };
        
function convert() {
            const inputValue = parseFloat(document.getElementById("first-input").value);
            const fromUnit = document.getElementById("first-unit").value;
            const toUnit = document.getElementById("second-unit").value;
            
            if (isNaN(inputValue)) {
                document.getElementById("second-input").value = "Please enter a valid number.";
                return;
            }
            
            if (conversionFactors[fromUnit] && conversionFactors[toUnit]) {
                
                const result = inputValue * conversionFactors[toUnit] / conversionFactors[fromUnit];
                document.getElementById("second-input").value = `${result}`;
                // document.getElementById("second-input").value = `${inputValue} ${fromUnit} = ${result} ${toUnit}`;
            } else {
                document.getElementById("second-input").value = "Invalid units selected.";
            }
        }
        
        // Populate the "To Unit" options in the select element
        const toUnitSelect = document.getElementById("second-unit");
        
        for (const unit in conversionFactors) {
            const option = document.createElement("option");
            option.value = unit;
            option.textContent = document.querySelector(`[value="${unit}"]`).textContent;
            
            toUnitSelect.appendChild(option);
        }