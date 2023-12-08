const initialState = {
  cart: [],
  product: [],
  favList: [],
  categoryProducts: {}, 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDCART':
      const newItem = action.payload;
      const isInCart = state.cart.some((item) => item.id === newItem.id);

      if (!isInCart) {
        const total = action.payload.price;

        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1, total, fav: false }],
        };
      } else {
        console.log('Item is already in the cart');
        return state;
      }

    case 'REMOVECART':
      const itemIdToRemove = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== itemIdToRemove);
      return {
        ...state,
        cart: updatedCart,
      };

    case 'ADDPRODUCT':
      const newProduct = action.payload;
      return {
        ...state,
        product: [...state.product, ...newProduct],
      };

    case 'GETPRODUCT':
      const productId = action.payload;
      const foundProduct = state.product.find((item) => item.id === productId);

      return foundProduct !== undefined
        ? { ...state, selectedProduct: foundProduct }
        : { ...state, selectedProduct: null };

    case 'INCREASEQTY':
      const incIndex = state.cart.findIndex((el) => el.id === action.payload);
      const updatedCartInc = state.cart.map((item, index) =>
        index === incIndex
          ? { ...item, qty: item.qty + 1, total: item.price * (item.qty + 1) }
          : item
      );

      return { ...state, cart: updatedCartInc };

    case 'DECREASEQTY':
      const decIndex = state.cart.findIndex((el) => el.id === action.payload);
      const updatedCartDec = state.cart.map((item, index) =>
        index === decIndex && item.qty > 1
          ? { ...item, qty: item.qty - 1, total: item.price * (item.qty - 1) }
          : item
      );

      return { ...state, cart: updatedCartDec };

    case 'ADDFAV':
      const favIndex = state.product.findIndex((el) => el.id === action.payload);
      if (favIndex !== -1) {
        const isAlreadyInFav = state.favList.some((el) => el.id === action.payload);
        if (!isAlreadyInFav) {
          return {
            ...state,
            favList: [...state.favList, state.product[favIndex]],
          };
        }
      }
      return state;

    case 'REMOVEFAV':
      const removeFavIndex = state.favList.findIndex((el) => el.id === action.payload);
      if (removeFavIndex !== -1) {
        const updatedFavList = [...state.favList.slice(0, removeFavIndex), ...state.favList.slice(removeFavIndex + 1)];
        return {
          ...state,
          favList: updatedFavList,
        };
      }
      return state;

    case 'GETCATEGORY':
        const selectedCategory = action.payload;
        const categoryProducts = state.product.filter((item) => item.category === selectedCategory);
      
        return {
          ...state,
          categoryProducts: {
            [selectedCategory]: categoryProducts,
          },
        };
      

    default:
      return state;
  }
};

export default cartReducer;

