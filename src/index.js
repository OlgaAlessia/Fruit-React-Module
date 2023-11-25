import fruits from "./foods";
import { choise, remove }from "./helpers";

const randomFruit = choise(fruits);

console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);

const fruitLeft = remove(fruits, randomFruit);

console.log(`I'm sorry, we're all out. We have ${fruitLeft.length} left.`);
