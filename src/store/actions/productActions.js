import axios from "axios";
import { ProductsGetAllUrl } from "../../api/ApiConnectionUrl";

export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";

export async function getProducts(dispatch) {
  const response = await axios.get(ProductsGetAllUrl);
  return dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data.data });
}

export function getCiftci() {
  return function (dispatch) {
    axios.get(ProductsGetAllUrl).then((data) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data.data.data });
    });
  };
}

export function getCiftciSuccess(ciftciler) {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: ciftciler,
  };
}
