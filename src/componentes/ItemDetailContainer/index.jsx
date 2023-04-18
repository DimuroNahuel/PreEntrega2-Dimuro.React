import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './detail.css'




function ItemDetailContainer(){
  const [product,setProduct]=useState(null)
  const [productExists, setProductExists] = useState(true);

  const params=useParams()

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "Items", params.id);

    getDoc(itemRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({id:snapshot.id, ...snapshot.data()})
          setProductExists(true);
        }
        else {
          setProductExists(false);
        }
      })
      .catch((error) => console.log({ error }));
  }, []);
  
  
  return (
    <div>
      {productExists ? (
        product ? (
          <ItemDetail product={product} />
        ) : (
            <span className=" load">Cargando...</span>
        )
      ) : (
        <div
          style={{
            display: "grid",
            textAlign: "center",
            fontSize: "3em",
            fontWeight: "bold",
            marginTop: "2.5em",
            fontFamily: "Comfortaa",
          }}
        >
          <span>Producto no disponible</span>
          <Link to="/">
            <Button variant="primary" className="mt-3">
              Volver a la tienda
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default ItemDetailContainer;