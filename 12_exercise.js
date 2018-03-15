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
  let candidatesLength = candidates.length;
  let filterLength = filters.length;
  let profile;
  let availableImmediately = false;
  let freshGrad = false;

  if (filterLength !== 0) {
    if (filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1) {
      availableImmediately = true;
    } else if (filters.indexOf('FRESH_GRAD') !== -1) {
      freshGrad = true;
    }

    for (let i = candidatesLength; i--; ) {
      profile = candidates[i].profiles && candidates[i].profiles.length > 0; //has.profiles

      if (candidates[i].profiles) {
        for (let k = filterLength; k--; ) {
          // loop through filters
          let hasFilter = false;
          for (let j = candidates[i].profiles.length; j--; ) {
            if (!availableImmediately && !freshGrad) {
              if (filters[k] == candidates[i].profiles[j].code) {
                hasFilter = true;
              }
            } else if (
              availableImmediately &&
              candidates[i].profiles[j].code === 'AVAILABLE_IMMEDIATELY'
            ) {
              hasFilter = true;
            } else if (
              freshGrad &&
              candidates[i].profiles[j].code === 'FRESH_GRAD'
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
  } else {
    filteredCandidates = candidates;
  }
  return filteredCandidates;
}

module.exports = filter;
