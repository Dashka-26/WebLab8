/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} FilterOptions
 * @property {string | null} [query] частина назви
 * @property {string | null} [genre] жанр
 * @property {number | null} [minRating] мінімальна оцінка
 */

/**
 * C2. Повертає серіали, які відповідають усім заданим фільтрам.
 * Специфікація — ТЗ, C2.
 *
 * @param {Show[]} shows
 * @param {FilterOptions} [options]
 * @returns {Show[]}
 */
export function filterShows(shows, { query, genre, minRating } = {}) {
  const cleanQ = query?.trim().toLowerCase() || '';
  return shows.filter(show => {
    if (cleanQ && !show.name.toLowerCase().includes(cleanQ)) {
      return false;
    }

    if (genre && !show.genres.includes(genre)) {
      return false;
    }

    if (minRating && (show.rating === null || show.rating < minRating)) {
      return false;
    }

    return true;
  })
}
