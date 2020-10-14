const shoppingList = [
    ['eggs', 'milk', 'butter,'],
    ['cleaner', 'trash bags', 'detergent,'],
    ['thank you card', 'pens', 'gift wrapping,'],
    ['shoes', 't-shirt', 'slacks'],
]

console.log(shoppingList);

const [arrayZero, arrayOne, arrayTwo, arrayThree] = shoppingList;
console.log([...arrayZero, ...arrayOne, ...arrayTwo, ...arrayThree]);
