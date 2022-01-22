import axios from "axios";
import { ProductGetByIdUrl, ProductsGetAllUrl } from "../api/ApiConnectionUrl";
export default class ProductService {
  async getProducts() {
    return await axios.get(ProductsGetAllUrl);
  }
  async getProductById(id) {
    return await axios.get(ProductGetByIdUrl(id));
  }
}
