// Calculate the Total Daily Energy Expenditure (TDEE)
function calculateTDEE(weight, height, age, activityLevel) {
    // Mifflin-St Jeor Equation for BMR (Basal Metabolic Rate)
    let BMR = 10 * weight + 6.25 * height - 5 * age + 5; // For males (change +5 to -161 for females)
    
    // TDEE = BMR * Activity Level
    return BMR * activityLevel;
}

// Calculate the bulking macros (Protein, Carbs, Fats)
function calculateMacros(tdee) {
    const protein = (tdee * 0.3) / 4;  // 30% of calories from protein (1g protein = 4 calories)
    const carbs = (tdee * 0.5) / 4;    // 50% of calories from carbs (1g carbs = 4 calories)
    const fats = (tdee * 0.2) / 9;     // 20% of calories from fats (1g fat = 9 calories)

    return { protein, carbs, fats };
}

// Event listener for form submission
document.getElementById('diet-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activity').value);

    // Calculate TDEE
    const tdee = calculateTDEE(weight, height, age, activityLevel);

    // Get macros
    const macros = calculateMacros(tdee);

    // Display results
    document.getElementById('calories').textContent = `Total Daily Calories: ${Math.round(tdee)} kcal`;
    document.getElementById('protein').textContent = `Protein: ${Math.round(macros.protein)} g`;
    document.getElementById('carbs').textContent = `Carbs: ${Math.round(macros.carbs)} g`;
    document.getElementById('fats').textContent = `Fats: ${Math.round(macros.fats)} g`;

    // Show result
    document.getElementById('result').style.display = 'block';
});
