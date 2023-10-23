import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import CategoryItems from "./components/CategoryItems";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo"
import Loader from "./components/Loader";


//navBar desde abajo con rutas react router dom y llas rutas pedidass
function App() {
  return (
    <BrowserRouter>
    <Loader />
    <NavBar />
    <Logo />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}></Route>
      <Route path="*" element={<h1>404! Escribenos si buscas algo y no lo encuentras</h1>}></Route>
      <Route exact path="/category/:categoryId" element={<CategoryItems/>}></Route>
      <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
