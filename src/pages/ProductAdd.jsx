import { Form, Formik } from "formik";
import { Button, FormField, Grid } from "semantic-ui-react";
import React from "react";
import * as Yup from "yup";
import GoBack from "../components/GoBack";
import RTextInput from "../utilities/customFromControls/RTextInput";
export default function ProductAdd() {
  const initialValues = {
    productName: "",
    categoryId: "",
    unitPrice: "",
    unitInStock: "",
  };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    categoryId: Yup.number().required("Ürün kategorisini şeçiniz"),
    unitPrice: Yup.number().required("Ürün fiyatını giriniz"),
    unitInStock: Yup.number().required("Ürün stok adetini giriniz"),
  });
  const handleProductAdd = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={2}>
            <GoBack />
          </Grid.Column>
          <Grid.Column width={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values) => handleProductAdd(values)}
            >
              <Form className="ui form">
                <FormField>
                  <RTextInput
                    labelText="Ürün Adı"
                    name="productName"
                    placeholder="Ürün Adı"
                  />
                </FormField>
                <FormField>
                  <RTextInput
                    labelText="Kategori"
                    name="categoryId"
                    placeholder="Kategori"
                  />
                </FormField>
                <FormField>
                  <RTextInput
                    labelText="Ürün Fiyatı"
                    name="unitPrice"
                    placeholder="Ürün Fiyatı"
                  />
                </FormField>
                <FormField>
                  <RTextInput
                    labelText="Stok Adeti"
                    name="unitInStock"
                    placeholder="Stok Adeti"
                  />
                </FormField>
                <Button color="orange" type="submit">
                  Kaydet
                </Button>
              </Form>
            </Formik>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
