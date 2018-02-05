function deepFreeze(object) {
  if (typeof object !== 'object') {
    return object;
  }
  Object.freeze(object);

  Object.values(object)
    .forEach(property => deepFreeze(property));

  return object;
}
export { deepFreeze };
