import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import GoBack from "../components/GoBack";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    let productService = new ProductService();
    productService.getProductById(id).then((result) => {
      setProduct(result.data.data);
    });
  }, [id]);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <GoBack />
          </Grid.Column>
          <Grid.Column width={12}>
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>{product.productName}</Card.Header>
                  <Card.Meta>
                    {product.categoryName ? product.categoryName : ""}
                  </Card.Meta>
                  <Card.Description>
                    {product.unitPrice} <strong>TL</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Sepete Ekle
                    </Button>
                    <Button basic color="orange">
                      Favoriye Ekle
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
