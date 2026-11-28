/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const copy = [...arr];
  if (param === 'asc') {
    return copy.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'}));
  } else {
    return copy.sort((a, b) => b.localeCompare(a, ['ru', 'en'], {caseFirst: 'upper'}));
  }
}
// PR for the AI review currency checks
// push before the review
// push during the review, tests pass
