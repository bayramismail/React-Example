const apiBaseUrl = "https://localhost:44350/api/";

const ProductsGetAllUrl = apiBaseUrl + "Products/getall";
const ProductGetByIdUrl = (id) => {
  return apiBaseUrl + "Products/getById?id=" + id;
};
export { ProductsGetAllUrl, ProductGetByIdUrl };
