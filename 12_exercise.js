/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

function filter(candidates, filters) {
  let filteredCandidates = [];
  let profile;
  let availableImmediatelyFilter = filters.includes("AVAILABLE_IMMEDIATELY");
  let freshGradFilter = !availableImmediatelyFilter && filters.includes("FRESH_GRAD");

  if (filters.length === 0) {
    return candidates;
  }

  for (let i = candidates.length; i--; ) {
    profile = candidates[i].profiles && candidates[i].profiles.length > 0; //has.profiles

    if (candidates[i].profiles) {
      for (let k = filters.length; k--; ) {
        // loop through filters
        let hasFilter = false;
        for (let j = candidates[i].profiles.length; j--; ) {
          if (!availableImmediatelyFilter && !freshGradFilter) {
            if (filters[k] == candidates[i].profiles[j].code) {
              hasFilter = true;
            }
          } else if (
            availableImmediatelyFilter &&
            candidates[i].profiles[j].code === "AVAILABLE_IMMEDIATELY"
          ) {
            hasFilter = true;
          } else if (
            freshGradFilter &&
            candidates[i].profiles[j].code === "FRESH_GRAD"
          ) {
            hasFilter = true;
          }
        }
        profile = profile && hasFilter;
      }
    }
    if (profile) {
      filteredCandidates.unshift(candidates[i]);
    }
  }
  return filteredCandidates;
}

module.exports = filter;
