/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} GenreStats
 * @property {number} count скільки серіалів мають цей жанр
 * @property {number | null} averageRating середня оцінка цих серіалів
 */

/**
 * C4. Рахує статистику для кожного жанру.
 * Специфікація — ТЗ, C4.
 *
 * @param {Show[]} shows
 * @returns {Record<string, GenreStats>} ключ — назва жанру
 */
export function genreStats(shows) {
  const aggregated = {};

  for (const show of shows) {
    for (const genre of show.genres) {
      if (!aggregated[genre]) {
        aggregated[genre] = { count: 0, sum: 0, ratedCount: 0 };
      }

      aggregated[genre].count += 1;

      if (show.rating !== null) {
        aggregated[genre].sum += show.rating;
        aggregated[genre].ratedCount += 1;
      }
    }
  }
  const result = {};

  for (const genre in aggregated) {
    const { count, sum, ratedCount } = aggregated[genre];
    let averageRating = null;

    if (ratedCount > 0) {
      averageRating = Number((sum / ratedCount).toFixed(1));
    }

    result[genre] = { count, averageRating };
  }
  return result;
}
