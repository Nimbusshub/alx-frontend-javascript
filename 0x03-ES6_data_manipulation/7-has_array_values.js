export default function hasValuesFromArray(aSet, arr) {
  return arr.reduce(function (acc, cur) {
    return acc && aSet.has(cur);
  }, true);
}
