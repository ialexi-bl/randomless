import { randomless, minIndex } from './util'

export default class Picker {
  constructor(symbols) {
    this.symbols = symbols
    this.amounts = []
    this.prob = []

    const len = symbols.length
    const p = 0.1 / (len - 1)
    for (let i = 0; i < len; i++) {
      this.amounts.push(0)
      this.prob.push(p)
    }
  }

  next() {
    const probabilities = this.prob.slice()
    const min = minIndex(this.amounts)
    probabilities[min] = 0.9

    const symbol = this.select(probabilities)
    this.amounts[symbol]++
    return this.symbols[symbol]
  }

  select(probabilities) {
    const result = Math.random()
    const len = probabilities.length
    for (let acc = 0, i = 0; i < len; i++) {
      acc += probabilities[i]
      if (acc > result) {
        return i
      }
    }

    return randomless(len)
  }
}
