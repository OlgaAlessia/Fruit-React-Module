/** choise a random item */
const choise = (items) => items[Math.floor(Math.random()*items.length)]

/** removes the item and if present return the items.
 * 
 * undefined if item not found
 * 
*/
const remove = (items, item) => {
    const pos = items.indexOf(item);
    
    if (pos === -1) return undefined;
    
    //delete items[pos];
    items.splice(pos, 1); // remove only one item

    return items;
} 


export { choise, remove }