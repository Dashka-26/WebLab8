/** @typedef {import('./normalize.js').Show} Show */

/**
 * C3. Повертає новий масив серіалів, відсортований за полем `key`.
 * Специфікація — ТЗ, C3.
 *
 * @param {Show[]} shows
 * @param {'name' | 'year' | 'rating'} key
 * @param {'asc' | 'desc'} [direction]
 * @returns {Show[]}
 */
export function sortShows(shows, key, direction = 'asc') {
  return [...shows].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (valA === null && valB === null) return 0;
    if (valA === null) return 1;
    if (valB === null) return -1;

    let result;
    if (key === 'name') {
      result = valA.localeCompare(valB);
    } else {
      result = valA - valB;
    }
    return direction === 'desc' ? -result : result;
  });
}
