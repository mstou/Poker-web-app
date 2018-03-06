import _ from 'lodash';

function maxInARow(cards) {
  return _.chain(cards)
    .sortBy()
    .uniq()
    .map((num, i) => (num.charCodeAt(0) - i))
    .groupBy()
    .orderBy('length')
    .last()
    .value()
    .length;
}
export { maxInARow };
