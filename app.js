
const _ = require('lodash');

const numbers = [10, 20, 30, 40, 50];

const meanValue = _.mean(numbers);
console.log(`Średnia arytmetyczna to: ${meanValue}`);

const maxValue = _.max(numbers);
console.log(`Maksymalna wartość to: ${maxValue}`);

const minValue = _.min(numbers);
console.log(`Minimalna wartość to: ${minValue}`);
