export function randomItemFromArray(array, lastItem) {
  const item = array[Math.floor(Math.random() * array.length)];
  if (item === lastItem) {
    return randomItemFromArray(array, lastItem);
  }
  return item;
}
