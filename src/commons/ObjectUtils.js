// using lodash 4.17.4

function groupBy(option) {
  return _.groupBy(this, option);
}

function sortBy(option) {
  return _.sortBy(this, option);
}

function flatten() {
  return _.flatten(this);
}

function maxInARow() {
  return _.chain(this)
    .sortBy()
    .uniq()
    .map((num, i) => (num - i))
    .groupBy()
    .orderBy('length')
    .last()
    .value()
    .length;
}
export { groupBy, sortBy, flatten, maxInARow };
