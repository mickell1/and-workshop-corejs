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

function filter(candidates, filters = []) {
  let filteredCandidates = [];
  let candidatesLength = candidates.length;
  let filterLength = filters.length;
  let profile;

  if (!filterLength ) {
    return candidates
  }

  availableImmediatelyFilter = filters.includes('AVAILABLE_IMMEDIATELY');
  freshGradFilter = !availableImmediatelyFilter && filters.includes('FRESH_GRAD');

  const checkCandidate = (profiles = [], filter) => profiles.some(profiles => filter.includes(profiles.code));

    for (let i = candidatesLength; i--; ) {
      profile = candidates[i].profiles && candidates[i].profiles.length > 0; //has.profiles

      if (candidates[i].profiles) {
        for (let k = filterLength; k--; ) {
          // loop through filters
          let hasFilter = false;
          for (let j = candidates[i].profiles.length; j--; ) {
            if (!availableImmediatelyFilter && !freshGradFilter) {
              if (filters[k] == candidates[i].profiles[j].code) {
                hasFilter = true;
              }
            }
            else if (availableImmediatelyFilter)
            {
              hasFilter = checkCandidate(candidates[i].profiles, 'AVAILABLE_IMMEDIATELY');
            }
            else if (freshGradFilter)
            {

              hasFilter = checkCandidate(candidates[i].profiles, 'FRESH_GRAD')
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

// function filter(candidates, filters = []) {
//
//   if (!filters.length ) {
//     return candidates
//   }
//
//   availableImmediatelyFilter = filters.includes('AVAILABLE_IMMEDIATELY');
//   freshGradFilter = !availableImmediatelyFilter && filters.includes('FRESH_GRAD');
//
//   const checkCandidate = (profiles = [], filter) => profiles.some(profiles => filter.includes(profiles.code));
//
//   return candidates.filter((profile) => {
//     if(availableImmediatelyFilter) {
//       return checkCandidate(profile, 'AVAILABLE_IMMEDIATELY');
//     }
//
//     if(freshGradFilter) {
//       return checkCandidate(profile, 'FRESH_GRAD');
//     }
//
//     return profiles;
//   })
//
//   return filters.every(candidate => checkCandidate(profiles, candidate));
// }
