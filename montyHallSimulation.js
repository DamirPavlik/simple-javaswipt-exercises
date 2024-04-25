const numberOfIteration = process.argv.slice(2);
let percentageWithoutChange = 0.0;
let percentageWithChange = 0.0;

for (let i = 0; i < numberOfIteration; i++) {
  let yourChoice = Math.floor(Math.random() * 3);
  let whereIsCar = Math.floor(Math.random() * 3);
  if (yourChoice === whereIsCar) {
    percentageWithoutChange++;
  } else {
    percentageWithChange++;
  }
}

percentageWithoutChange = (percentageWithoutChange / numberOfIteration) * 100;
percentageWithChange = (percentageWithChange / numberOfIteration) * 100;
console.log({ percentageWithoutChange, percentageWithChange });
