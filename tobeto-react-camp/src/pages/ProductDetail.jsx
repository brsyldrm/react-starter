import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getByProductId(id).then((result) => setProduct(result.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            {product.thumbnail && (
              <Image floated="mid" 
              src={product.thumbnail} />
            )}
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>{product.category}</Card.Meta>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}