declare class Picker<T = any> {
  constructor(symbols: T[])
  next(): T
}

declare interface Randomless {
  /**
   * Generates an array of random(less)ly distributed numbers more or equal than
   * min and less than max.
   * @param {number} count - Amount of numbers
   * @param {number|undefined} min - Lower bound
   * @param {number|undefined} max - Upper bound
   */
  getNumbers(count: number): number[]
  getNumbers(count: number, max: number): number[]
  getNumbers(count: number, min: number, max: number): number[]

  /**
   * Generates a multidimensional array of zeros and ones, which are
   * distributed random(less)ly across it
   * @param {number} count - Amount of ones in resulting grid
   * @param {number[]} dims - Dimensions of the array
   */

  getGrid(count: number, dimensions: [number]): number[]
  getGrid(count: number, dimensions: [number, number]): number[][]
  getGrid(count: number, dimensions: [number, number, number]): number[][][]
  getGrid(
    count: number,
    dimensions: [number, number, number, number]
  ): number[][][][]
  getGrid<TArray extends number[]>(count: number, dims: number[]): TArray

  /**
   * Produces a random(less) sequence of symbols from given set
   * @param {number} count - Amount of symbols
   * @param {any[]} symbols - Symbols to choose from
   */
  getSequence<T = any>(count: number, symbols: T[]): T[]

  /**
   * Infinitely and random(less)ly picks and returns symbols from given set
   */
  Picker: typeof Picker
}

declare module 'randomless' {
  const randomless: Randomless
  export default randomless
}

declare module 'randomless/numbers' {
  const getNumbers: Randomless['getNumbers']
  export default getNumbers
}
declare module 'randomless/grid' {
  const getGrid: Randomless['getGrid']
  export default getGrid
}
declare module 'randomless/sequence' {
  const getSequence: Randomless['getSequence']
  export default getSequence
}
declare module 'randomless/picker' {
  const Picker: Randomless['Picker']
  export default Picker
}
