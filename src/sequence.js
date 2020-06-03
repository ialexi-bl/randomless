import Picker from './picker'

/**
 * Produces a random(less) sequence of symbols from given set
 * @param {number} count - Amount of symbols
 * @param {any[]} symbols - Symbols to choose from
 */
export default function getSequence(count, symbols) {
  const result = []
  const picker = new Picker(symbols)

  for (let i = 0; i < count; i++) {
    result.push(picker.next())
  }
  return result
}
