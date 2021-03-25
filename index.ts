// Import stylesheets
import "./style.css";
import { from, of } from "rxjs";
import { filter } from "rxjs/operators";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const numbers$ = from([3, 4, 5, 7, 2, 9, 3, 1, 10, 13, 4]);

numbers$.pipe(filter(isEvenNumber)).subscribe(console.log);

function isEvenNumber(number) {
  return number % 2 === 0;
}

function filterUniqueValue(value, index, values) {
  return values.indexOf(value) === index;
}

function sum(total, value) {
  return total + value;
}

function collectUniqueValues(uniqueValues, value) {
  return uniqueValues.includes(value) ? uniqueValues : [...uniqueValues, value];
}
