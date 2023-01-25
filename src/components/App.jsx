import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
       <Navbar/>
       <ItemListContainer greetings={'Welcome!'}/>      
    </>
  )
}

export default App;
