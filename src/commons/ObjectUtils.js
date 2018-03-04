import _groupBy from 'lodash/groupBy';
import _sortBy  from 'lodash/sortBy';
import _flatten from 'lodash/flatten';
import _chain from 'lodash/chain';

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
