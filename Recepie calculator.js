// first calculator: convert cups to grams/kgs and vice versa, of common products

/* for example: 
    sugar 1 cup = 100 gr
    
    
    - writing how many cups
    | cups * weight of 1 cup = weight of cups.
    - choosing grams/kgs.
    - a 'calculate' button.
    - a button that change the conversion to grams to cups
    - writing how many grams/ kilos
    | weight / weight of 1 cup = cups
    ? add the option to add ingridients? just need to the give the option to add how much is the weight of 1 cup.

*/ 
// the cups to grams formula
function cupsToGrams(ingridient,cups) {
    let gramsResult = cups * ingridient;
    return gramsResult;
}
//grams to cups formula
function gramsToCups(ingridient,grams) {
    let cupsResult = grams / ingridient;
    return cupsResult;
}


    // converting the choice into a function
    
// the object factory function: name and weight for a cup
function createIngridient(name,weight) {
return {
    name:name,
    weight:weight
};
}
// the preset ingridients:
let sugar = createIngridient('סוכר',200);
let flour = createIngridient('קמח',140);
let powderedSugar = createIngridient('אבקת סוכר',120);
let cocoa = createIngridient('אבקת קקאו',85);
let almondFlour = createIngridient('קמח שקדים',96);
let rice = createIngridient('אורז',200);
let water = createIngridient('מים',240);


// now is all the frontend system, the buttons and so on.
// append the ingridients array to the dropdownlist
let list = document.getElementById('ingridients');
let arrayOfIngridients = [sugar,flour,powderedSugar,cocoa,almondFlour,rice,water];
function addToList() {
    for(let i =0; i < arrayOfIngridients.length; i++) {
        let optn = arrayOfIngridients[i];
        let el = document.createElement("option");
       
        el.textContent = optn.name;
        el.value = optn.weight;
        list.appendChild(el);
    }
}
addToList();
//the calculate function
function calculate() {

// user chose formula
    const selectedFormula = document.querySelector('input[name="convert"]:checked').value;
// user chose ingridient
    const selectedIngridient = parseFloat(list.value);
// user chose quantity
    const numericValue = parseFloat(document.getElementById('amount').value);
// making sure user is entering valid number.
if (isNaN(numericValue) || isNaN(selectedIngridient) ) {
  return "בחרי כמות וחומר גלם";
}

// calculating the conversion
if(numericValue < 0) {
    return "בחרי מספר מעל 0";
}
else {
        if(selectedFormula === 'cups') {
        return cupsToGrams(selectedIngridient,numericValue);
    }
    else {
        return gramsToCups(selectedIngridient,numericValue);
    }
}

}
/* the calculate button and action
let calculateButton = document.getElementById('calculate');
calculateButton.addEventListener("click",function () {
  document.getElementById("resultText").innerHTML = calculate()
});
*/

// update the result with every change of input
function updateResult() {
    document.getElementById("resultText").innerHTML = calculate();
}
// change result when amount changes
document.getElementById('amount').addEventListener("input",updateResult);
// change result when ingridient is changed
list.addEventListener('change',updateResult);
document.querySelectorAll('input[name = "convert"]').forEach(radio => {
    radio.addEventListener("change",updateResult);
});