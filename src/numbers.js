/**
 * Generates an array of random(less)ly distributed numbers more or equal than
 * min and less than max.
 * @param {number} count - Amount of numbers
 * @param {number|undefined} min - Lower bound
 * @param {number|undefined} max - Upper bound
 */
export default function getNumbers(count, min = 0, max = 1) {
  if (typeof count != 'number') {
    throw new Error('`count` must be a number')
  }
  if (typeof min != 'undefined' && typeof max == 'undefined') {
    max = min
    min = 0
  }

  const result = []
  const chunkSize = ((max - min) * 0.98) / count
  let point = -Infinity

  for (let i = 0; i < count; i++) {
    // Ensuring that next point is at least 5% chunk length away from previous one
    const start = Math.max(i * chunkSize, point + chunkSize * 0.05)
    const end = (i + 1) * chunkSize

    point = Math.random() * (end - start) + start
    result.push(point)
  }

  return result
}
