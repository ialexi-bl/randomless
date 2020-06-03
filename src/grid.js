import { randomless, maxIndex } from './util'

/**
 * Generates a multidimensional array of zeros and ones, which are
 * distributed random(less)ly across it
 * @param {number} count - Amount of ones in resulting grid
 * @param {number[]} dims - Dimensions of the array
 */
export default function grid(count, dims) {
  let options
  if (typeof count === 'object') {
    options = Object.assign({}, defaults, count)
  } else {
    options = { count, dims }
  }

  const grid = createEmptyGrid(dims)
  const lastDim = dims.length - 1

  function distribute(count, dims, start) {
    if (!count) return
    if (count === 1) {
      let ptr = grid
      for (let i = 0; i < lastDim; i++) {
        ptr = ptr[start[i] + randomless(dims[i])]
      }
      ptr[start[lastDim] + randomless(dims[lastDim])] = 1
      return
    }

    const dim = maxIndex(dims)
    const firstCount = ~~(count / 2 + Math.random())

    const newDims = dims.slice()
    const newStart = start.slice()

    newDims[dim] = ~~(dims[dim] / 2)
    distribute(firstCount, newDims, newStart)

    newStart[dim] += newDims[dim]
    newDims[dim] = dims[dim] - newDims[dim]
    distribute(count - firstCount, newDims, newStart)
  }
  distribute(options.count, options.dims, createEmptyGrid([dims.length]))

  return grid
}

/**
 * Creates a multidimensional array, filled with zeros
 * @param {number[]} dims - Grid dimensions
 */
function createEmptyGrid(dims) {
  const last = dims.length - 1
  let current = '['

  for (let i = 0; i < dims[last]; i++) {
    current += '0,'
  }
  current = current.slice(0, -1) + ']'

  for (let i = last - 1; i >= 0; i--) {
    let row = '['
    for (let j = 0; j < dims[i]; j++) {
      row += current + ','
    }

    current = row.slice(0, -1) + ']'
  }

  return JSON.parse(current)
}
