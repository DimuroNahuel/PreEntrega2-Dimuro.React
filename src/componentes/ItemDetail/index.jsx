import { useContext, useState } from "react";
import './itemDetail.css'
import  ItemCount  from "../ItemCount";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function ItemDetail({product}) {
  const {onAdd}=useContext(Context)
  const [added, setAdded] = useState(0);

  function onAddProduct(count){
    setAdded(count)
    onAdd(product, count)
  }
  return (

    <div className="content">

<Card style={{ width: "38rem"}}className="content">
      <Card.Img variant="bottom" src={product.image} style={{ width: "18rem"}}/>
      <Card.Body >
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>$ {product.price}</Card.Text>
        <Card.Text>Unidades Disponibles: {product.stock}</Card.Text>
        <Card.Text>TIPO DE TELA: {product.material}</Card.Text>
        <Card.Text>¿CÓMO SE TOMAN LAS MEDIDAS DE LOS TALLES? {product.medidas}</Card.Text>
        <Card.Text>IMPORTANTE: {product.important}</Card.Text>
      </Card.Body>
    </Card>


        <div className="fotterDesc"style={{padding:"3rem"}}>
        <div>
            {added == 0 && (
              <ItemCount stock={product.stock} onAdd={onAddProduct} />
            )}
            <div className="ctas-container">
              {added >= 1 && (
                <Link to="/cart">
                  <Button  variant="primary">Terminar compra</Button>
                </Link>)}
            </div>
          </div>
        </div>
      </div>
  );
}

export default ItemDetail;