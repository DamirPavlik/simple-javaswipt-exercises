let array = [1, "1", "sdanu", [1, 1, "dsagt", "1", [1, "1", 1], 1], 1, "sda"];

/**
 * Recursively iterates over an array and sums up all the numbers and numeric strings.
 *
 * @param {Array} array - The array to iterate over.
 * @return {undefined} This function does not return a value.
 */
const recursion = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === "number" && !isNaN(element)) {
      sum += element;
    } else if (Array.isArray(element)) {
      sum += recursion(element);
    } else if (typeof element === "string" && !isNaN(parseInt(element))) {
      sum += parseInt(element);
    }
  }

  return sum;
};
console.log(recursion(array));
