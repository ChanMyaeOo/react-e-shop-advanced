import ShopActionTypes from "./shop-types";
export const updateShopCollections = (collectionMap) => ({
  type: ShopActionTypes.UPEATE_COLLECTIONS,
  payload: collectionMap,
});
