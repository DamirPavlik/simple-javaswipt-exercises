const array = [3, 5, 2, 1, 4, 6];
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(`Array First Sort: ${array}`);

const array2 = [3, 5, 2, 1, 4, 6];
for (let i = 0; i < array2.length - 1; i++) {
  for (let j = i; j < array2.length; j++) {
    if (array2[i] > array2[j]) {
      let temp = array2[i];
      array2[i] = array2[j];
      array2[j] = temp;
    }
  }
}
console.log(`Array Second Sort: ${array2}`);
