import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./item.css"

function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/item/${product.id}`}>
      <Card.Img variant="bottom" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>$ {product.price}</Card.Text>
        <Card.Text>Unidades Disponibles: {product.stock}</Card.Text>

        <Button className="botonCard " variant="primary">
          <Link className="link text-white" to={`/item/${product.id}`}>Detalles del articulo</Link>
          </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;