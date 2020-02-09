import { createSelector } from 'reselect'



const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)
export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)


export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections =>collections ? Object.keys(collections).map((collection) => {
    return collections[collection]
  }) : [] 
)


export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
  )

  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections 
  )