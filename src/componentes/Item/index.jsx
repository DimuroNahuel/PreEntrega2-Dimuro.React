import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./item.css"

function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="bottom" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>$ {product.price}</Card.Text>
        <Card.Text>Unidades Disponibles: {product.stock}</Card.Text>

        <Button className="botonCard" variant="outline-success">
          <Link className="link" to={`/item/${product.id}`}>Detalles del articulo</Link>
          </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;