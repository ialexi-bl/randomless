declare module 'randomless' {
  namespace Randomless {
    /**
     * Generates an array of random(less)ly distributed numbers more or equal than
     * min and less than max.
     * @param {number} count - Amount of numbers
     * @param {number|undefined} min - Lower bound
     * @param {number|undefined} max - Upper bound
     */
    interface getNumbers {
      (count: number): number[]
      (count: number, max: number): number[]
      (count: number, min: number, max: number): number[]
    }

    /**
     * Generates a multidimensional array of zeros and ones, which are
     * distributed random(less)ly across it
     * @param {number} count - Amount of ones in resulting grid
     * @param {number[]} dims - Dimensions of the array
     */
    interface getGrid {
      (count: number, dimensions: [number]): number[]
      (count: number, dimensions: [number, number]): number[][]
      (count: number, dimensions: [number, number, number]): number[][][]
      (
        count: number,
        dimensions: [number, number, number, number]
      ): number[][][][]

      <TArray extends number[]>(count: number, dims: number[]): TArray
    }

    /**
     * Produces a random(less) sequence of symbols from given set
     * @param {number} count - Amount of symbols
     * @param {any[]} symbols - Symbols to choose from
     */
    interface getSequence {
      <T = any>(count: number, symbols: T[]): T[]
    }

    /**
     * Infinitely and random(less)ly picks and returns symbols from given set
     */
    class Picker<T = any> {
      constructor(symbols: T[])
      next(): T
    }
  }

  export default Randomless
}
