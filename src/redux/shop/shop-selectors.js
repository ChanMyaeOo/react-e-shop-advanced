import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollectionPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlPara) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlPara]
  );
