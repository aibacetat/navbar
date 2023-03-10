import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/Navbar/ItemListContainer";
import { GreetingsProptype } from "./components/Navbar/GreetingsProptype";

function App() {
  return (
    <>
      <Navbar />
      <GreetingsProptype title="NAVBAR REACT" subTitle="V 2.1"/>
      <ItemList />
    </>
  );
}

export default App;