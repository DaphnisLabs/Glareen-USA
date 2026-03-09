export const ARCHIVED_COLLECTIONS = ["dhoop-sticks", "dhoop-cones"];

export const normalizeCollectionKey = (value = "") =>
  String(value).trim().toLowerCase().replace(/\s+/g, "-");

export const isArchivedCollection = (value = "") =>
  ARCHIVED_COLLECTIONS.includes(normalizeCollectionKey(value));

export const getVisibleCollectionEntries = (productDataMap = {}) =>
  Object.fromEntries(
    Object.entries(productDataMap).filter(
      ([key]) => !isArchivedCollection(key)
    )
  );

export const getVisibleItems = (items = [], selector = (item) => item) =>
  items.filter((item) => !isArchivedCollection(selector(item)));