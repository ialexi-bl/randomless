/**
 * Generates not at all random numbers
 * @param {number} max - Upper bound
 */
export function randomless(max) {
  return ~~(Math.random() * max)
}

export function maxIndex(a) {
  return a.reduce(
    (imax, curr, i, arr) => (curr > arr[imax] ? i : imax),
    randomless(a.length)
  )
}
export function minIndex(a) {
  return a.reduce(
    (imin, curr, i, arr) => (curr < arr[imin] ? i : imin),
    randomless(a.length)
  )
}
