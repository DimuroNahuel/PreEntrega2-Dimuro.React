
import { useParams } from "react-router-dom";
import NavBar from "../componentes/NavBar";
import ItemDetailContainer from "../componentes/ItemDetailContainer";


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
