import NavBar from "../componentes/NavBar";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "../componentes/ItemListContainer";

function Root() {
  const params = useParams();
  const categoryExists = Boolean(params.id);
  return (
    <div>
      <NavBar />
      <ItemListContainer categoryExists={categoryExists} category={params.id} />
    </div>
  );
}

export default Root;