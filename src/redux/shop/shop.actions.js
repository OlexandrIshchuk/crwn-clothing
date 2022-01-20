import SopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
    type: SopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})