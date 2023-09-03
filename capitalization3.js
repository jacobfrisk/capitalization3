// Navnet defineres
const firstName = "peter";

// Det tredje bogstav bliver gjort uppercase
const capitalP = firstName.charAt(2).toUpperCase();
console.log(capitalP);

//Første del af navnet hives ud af strengen
const firstPart = firstName.substring(0, 2);
console.log(firstPart);

//Anden del af navnet hives ud af strengen
const lastPart = firstName.substring(3);
console.log(lastPart);

// Det nye navn sættes sammen
const newName = firstPart + capitalP + lastPart;
console.log(newName);
