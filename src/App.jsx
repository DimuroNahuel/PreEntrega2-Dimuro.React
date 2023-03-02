import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import './app.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola mundo"} />
      </div>
  )
}

export default App
