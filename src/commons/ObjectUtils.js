import groupBy as _groupBy from 'lodash/groupBy';
import sortBy as _sortBy from 'lodash/sortBy';
import flatten as _flatten from 'lodash/flatten';
import chain as _chain from 'lodash/chain';

function groupBy(option) {
  return _groupBy(this, option);
}

function sortBy(option) {
  return _sortBy(this, option);
}

function flatten() {
  return _flatten(this);
}

function maxInARow() {
  return _chain(this)
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
