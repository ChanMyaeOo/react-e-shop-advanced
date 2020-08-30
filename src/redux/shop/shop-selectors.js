import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShopData = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlPara) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlPara]
    )
  );
