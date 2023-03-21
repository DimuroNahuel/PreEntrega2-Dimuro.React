import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="bottom" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>$ {product.price}</Card.Text>
        <Card.Text>Unidades Disponibles: {product.stock}</Card.Text>

        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;