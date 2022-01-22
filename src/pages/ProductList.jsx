import React, { useEffect } from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
// import * as productActions from "../store/actions/productActions";
import { useNavigate } from "react-router-dom";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import ProductService from "../services/productService";
import CustomizedList from "../components/Customize";
const CreateDataTable = (veri, navigate, handleAddToCart) => {
  $(document).ready(function () {
    $("#example").DataTable({
      language: {
        sDecimal: ",",
        sEmptyTable: "Tabloda herhangi bir veri mevcut değil",
        sInfo:
          "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
        sInfoEmpty: "Kayıt yok",
        sInfoFiltered: "(_MAX_ kayıt içerisinden bulunan)",
        sInfoThousands: ".",
        sLengthMenu: "Sayfada _MENU_ kayıt göster",
        sLoadingRecords: "Yükleniyor...",
        sProcessing: "İşleniyor...",
        sSearch: "Ara:",
        sZeroRecords: "Eşleşen kayıt bulunamadı",
        oPaginate: {
          sFirst: "İlk",
          sLast: "Son",
          sNext: "Sonraki",
          sPrevious: "Önceki",
        },
        oAria: {
          sSortAscending: ": artan sütun sıralamasını aktifleştir",
          sSortDescending: ": azalan sütun sıralamasını aktifleştir",
        },
        select: {
          rows: {
            _: "%d kayıt seçildi",
            1: "1 kayıt seçildi",
          },
        },
      },
      responsive: true,
      scrollX: true,
      data: veri,
      columns: [
        { data: "productId", title: "Id" },
        { data: "productName", title: "Urun Adı" },
        { data: "unitsInStock", title: "Stok Adeti" },
        { data: "unitPrice", title: "Birim Fiyat" },
        {
          data: "productId",
          title: "Düzenle",
          createdCell: (td, cellData, rowData, row, col) => {
            ReactDOM.render(
              <>
                <button
                  onClick={() => {
                    navigate(`/products/${rowData["productId"]}`);
                  }}
                  className="btn"
                >
                  <i className="fad fa-edit"></i>
                </button>
                <button
                  onClick={() => handleAddToCart(rowData)}
                  className="btn"
                >
                  <i className="fad fa-cart-arrow-down"></i>
                </button>
              </>,
              td
            );
          },
        },
      ],
    });
  });
};

export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} Sepete Eklendi`);
  };
  // const { productItems } = useSelector((state) => state.product);
  useEffect(() => {
    //  dispatch(productActions.getCiftci());
    let productService = new ProductService();
    productService.getProducts().then((result) => {
      CreateDataTable(result.data.data, navigate, handleAddToCart);
    });
  }, []);
  //
  return (
    <Grid columns={2} stackable>
      <GridRow>
        <GridColumn width={4}>
          <CustomizedList />
        </GridColumn>
        <GridColumn width={12}>
          <table
            id="example"
            className="display nowrap"
            style={{ width: "100%" }}
          ></table>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
