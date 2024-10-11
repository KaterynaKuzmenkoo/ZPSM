// Import biblioteki lodash
const _ = require('lodash');

// Tablica liczb
const numbers = [10, 20, 30, 40, 50];

// Obliczenie średniej arytmetycznej
const meanValue = _.mean(numbers);

// Wyświetlenie wyniku w konsoli
console.log(`Średnia arytmetyczna to: ${meanValue}`);
