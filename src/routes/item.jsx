import NavBar from "../componentes/NavBar";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import { useParams } from "react-router-dom";


function ItemRoot() {
  const {id}=useParams();
  return (
    <div>
      <NavBar />
      <ItemDetailContainer productDetail={id}/>
    </div>
  );
}

export default ItemRoot;
