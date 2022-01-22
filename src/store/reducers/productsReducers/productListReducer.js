import { GET_PRODUCT_SUCCESS } from "../../actions/productActions";
import { productItems } from "../../initialValues/productsItems";

const initialState = {
  productItems: productItems,
};
export default function productListReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_PRODUCT_SUCCESS:
      return { productItems: payload };
    default:
      return state;
  }
}
