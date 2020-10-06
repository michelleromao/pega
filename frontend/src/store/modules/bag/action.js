export function addProductToBag(announcement) {
  return {
    type: 'ADD_PRODUCT_TO_BAG',
    payload: {
      announcement,
    },
  };
}

export function removeProductToBag(idAnnouncement) {
  return {
    type: 'REMOVE_PRODUCT_TO_BAG',
    payload: {
      idAnnouncement,
    },
  };
}

export function buyProductsInBag(user) {
  return {
    type: 'BUY_PRODUCTS_IN_BAG',
    payload: { user },
  };
}
