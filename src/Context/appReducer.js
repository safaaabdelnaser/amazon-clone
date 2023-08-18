export const initialState = {
  basket: [],
  user: null,
};
export const getCartTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW-USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.items],
      };
    case "REMOVE-PRODUCT-CART":
      const index = state.basket.findIndex(
        (cartItem) => (cartItem.id = action.id)
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't find this ID ${action.id} it's not in cart`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE-All-PRODUCT-CART":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default AppReducer;
