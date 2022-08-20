import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const convertDataToArr = createSelector([selectShopData], (data) => {
  return Object.keys(data).map((key) => data[key]);
});

export const selectCorrectData = (urlParam) => {
  return createSelector([selectShopData], (data) => {
    return data[urlParam];
  });
};
