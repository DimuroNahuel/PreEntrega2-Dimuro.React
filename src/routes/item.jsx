import { useParams } from "react-router-dom";
import ItemDetailContainer from "../componentes/ItemDetailContainer";

function ItemRoot() {
  const params  = useParams();

  return (
    <div>
      <ItemDetailContainer itemId={params.id} />

    </div>
  );
}

export default ItemRoot;
