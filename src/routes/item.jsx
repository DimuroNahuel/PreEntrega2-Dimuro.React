import { useParams } from "react-router-dom";
import ItemDetailContainer from "../componentes/ItemDetailContainer";

function ItemRoot() {
  const { params } = useParams();

  return (
    <div>
      <ItemDetailContainer  />

    </div>
  );
}

export default ItemRoot;
