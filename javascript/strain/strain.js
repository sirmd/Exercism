
export const keep = (collection = [], func) => {
  return collection.filter(func);
};

export const discard = (collection = [], func) => {
  return collection.filter((item) => !func(item));
};
