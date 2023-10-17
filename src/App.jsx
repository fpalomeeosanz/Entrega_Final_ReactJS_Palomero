import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import CategoryItem from "./components/CategoryItems";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo"


//navBar desde abajo con rutas react router dom y llas rutas pedidass
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Logo />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}></Route>
      <Route path="*" element={<h1>404! Escribenos si buscas algo y no lo encuentras</h1>}></Route>
      <Route exact path="/category/:categoryId" element={<CategoryItem/>}></Route>
      <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
