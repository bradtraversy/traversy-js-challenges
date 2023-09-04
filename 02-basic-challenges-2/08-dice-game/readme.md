# Challenge: Dice Game Simulation

## Instructions

Write a function called `diceGameSimulation` that simulates this dice game. The function should take one argument:

- `numSimulations`: The number of times to simulate the dice game.

The game rules are if a 7 or 11 are rolled, the player wins and they get a result of `win`. If a 2, 3 or 12 are rolled they lose and get a result of `lose`. Anything else and they get a result of `roll again`.

The function should return an array of objects, where each object represents a simulation result. Each object should contain the following properties:

- `dice1`: The value of the first dice (a random number between 1 and 6).
- `dice2`: The value of the second dice (a random number between 1 and 6).
- `sum`: The sum of the two dice values.
- `result`: The result of the roll, which can be "win", "lose", or "roll again".

### Function Signature

```js
/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations: number): Array;
```

### Example

```js
console.log(diceGameSimulation(3));
/*
  { dice1: 1, dice2: 5, sum: 6, result: 'roll again' },
  { dice1: 5, dice2: 6, sum: 11, result: 'win' },
  { dice1: 1, dice2: 1, sum: 2, result: 'lose' }
*/
```

### Hints

- You can use the `Math.random()` function to simulate rolling a die. It returns a random number between 0 (inclusive) and 1 (exclusive).

## Solution

<details>
  <summary>Click For Solution</summary>

```js
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
  const results = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;

    let result = '';
    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }

    results.push({ dice1, dice2, sum, result });
  }

  return results;
}

module.exports = diceGameSimulation;
```

### Explanation

- The `rollDice` function simulates rolling a single die. It uses `Math.random()` to generate a random decimal between 0 (inclusive) and 1 (exclusive), multiplies it by 6, rounds down, and adds 1 to get a random number between 1 and 6.
- The `diceGameSimulation` function simulates the dice game for the specified number of simulations. It uses the `rollDice` function to generate random dice values and calculates the sum of the two dice.
- Depending on the sum, the `result` property is determined according to the game rules.
- The results of each simulation are stored in an array of objects.
- The module exports the `diceGameSimulation` function to make it accessible in other files.

</details>

### Test Cases

```js
test('Dice Game Simulation', () => {
  const numSimulations = 5;
  const simulationResults = diceGameSimulation(numSimulations);

  simulationResults.forEach((result) => {
    console.log(`Simulation Result: ${result.finalResult}`);
    result.rolls.forEach((roll) => {
      console.log(
        `  Dice 1: ${roll.dice1}, Dice 2: ${roll.dice2}, Sum: ${roll.sum}, Result: ${roll.result}`
      );
    });
  });
});
```
