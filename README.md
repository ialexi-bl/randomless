# Randomless

Computers are bad at randomness and so are people. But computers can imitate human ideas about randomness using this little JavaScript library with no dependencies

## Purpose

This library provides small functions that generate random numbers or distributions that look random to people, but in reality are not so.

If you ask a person to predict the order of heads and tails when they flip a coin 10 times, they will probably say something like "HTTHTHTHHT". But in reality there will be many clusters, where heads or tails come one after another several times like "HHTHHHHHTT" or even "TTTTTTTTTT".

This library tries to produce random values with few clusters, like a human would.

## Install

Install the library

```
npm i --save randomless
```

Use it in your code

```js
const Randomless = require('randomless')
// or
import Randomless from 'randomless'
```

You can also import individual functions

```js
import getSequence from 'randomless/sequence'
import getNumbers from 'randomless/numbers'
import getGrid from 'randomless/grid'
import Picker from 'randomless/picker'
```

## Functions

- ```ts
  Randomless.getNumbers(count: number): number[]
  Randomless.getNumbers(count: number, max: number): number[]
  Randomless.getNumbers(count: number, min: number, max: number): number[]
  ```

  Produces an array of length `count` of random(less) numbers between `min` (inclusive, default `0`) and `max` (not inclusive, default `1`). Numbers will be distributed more or less evenly around the range.

  ### Comparison

  ```js
  // "Truly" random numbers
  console.log(
    [...Array(5)].map(() => Math.floor(Math.random() * 20 * 100) / 100)
  )
  // [19.4, 6.81, 13.22, 17.33, 19.84]

  // Randomless numbers
  console.log(
    Randomless.getNumbers(5, 20).map((n) => Math.floor(n * 100) / 100)
  )
  // [1.71, 6.09, 9.16, 12.69, 18.7]
  ```

- ```ts
  Randomless.getGrid(count: number, dimensions: number[]): number[]
  ```

  Produces a grid with any amount of dimensions that is filled with zeros and contains an amount of ones, specified by `count`, that are distributed random(less)ly around it.

  ### Comparison

  ```js
  // "Truly" random grid
  const grid = [...Array(8)].map(() => [...Array(30)].fill('—'))
  for (let i = 0; i < 15; i++) {
    const row = Math.floor(Math.random() * 8)
    const col = Math.floor(Math.random() * 30)
    grid[row][col] = '*'
  }
  console.log(grid.map((row) => row.join('')).join('\n'))
  /*
  ——*—————————*————*————————————
  ——————————————***—————————————
  ——————————————————————————*—*—
  ———————————————————————————*——
  ——————————————————————————————
  —————————————————————————*————
  —————————*————————————————————
  ——————————*————————————————*——
  */

  // Randomless grid
  const rgrid = Randomless.getGrid(15, [8, 30])
  console.log(
    rgrid.map((row) => row.map((col) => (col ? '*' : '—')).join('')).join('\n')
  )
  /*
  ————————*—————————————————————
  ——*—————————————————————*———*—
  ————*———————*———————*—————————
  ———————————————*——————————————
  ——————*———————————————————————
  ——————————————————————*———————
  ——*———————————*———*———————————
  ——————————*————*——————————————
  */
  ```

- ```ts
  Randomless.getSequence<T>(count: number, symbols: T[]): T[]
  ```

  Produces a random(less) sequence of length, given by `count`, that consists of given symbols.

  ### Comparison

  Example with heads and tails from the description of the library:

  ```js
  // "Truly" random distribution
  console.log(
    [...Array(10)].map(() => ['T', 'H'][Math.round(Math.random())]).join('')
  )
  // "HHHHHHTTTT"

  // Randomless distribution
  console.log(Randomless.getSequence(10, ['H', 'T']).join(''))
  // "HTTHHTHTTT"
  ```

The library also provides a small class that for producing such sequences infinitely

```ts
class Picker<T> {
  constructor(symbols: T[])
  next(): T
}
```

Example:

```js
const picker = new Picker(['H', 'T'])

// Print randomless heads and tails till the end of times
while (true) {
  console.log(picker.next())
}
```

Note, that this class does **not** implement JavaScript iterator protocol
