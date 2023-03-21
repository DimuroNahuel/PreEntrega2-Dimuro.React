import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"TIENDA ONLINE"} />
      </div>
  )
}

export default App
