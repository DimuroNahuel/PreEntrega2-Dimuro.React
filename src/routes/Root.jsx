import NavBar from "../componentes/NavBar";
import ItemListContainer from "../componentes/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"TIENDA ONLINE"} />
      </div>
  )
}

export default Root
