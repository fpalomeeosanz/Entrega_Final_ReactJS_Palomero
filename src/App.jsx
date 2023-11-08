import "./App.css"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo"
import Loader from "./components/Loader";
import CartContainer from "./components/CartContainer";
import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoryAds from "./components/CategoryAds";
import CategoryVoice from "./components/CategoryVoice";
import CategoryWeb from "./components/CategoryWeb";
import CategoryCoach from "./components/CategoryCoach";
import Seo from "./components/Seo"

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
      <Route exact path="/category/contact" element={<Contact />}></Route>
      <Route exact path="/category/Ads" element={<CategoryAds />}></Route>
      <Route exact path="/category/Voice" element={<CategoryVoice />}></Route>
      <Route exact path="/category/Web" element={<CategoryWeb />}></Route>
      <Route exact path="/category/Coach" element={<CategoryCoach />}></Route>
      <Route exact path="/item/:itemId" element={<ItemDetailContainer />}></Route>
      <Route exact path="/7rbyS9u2xORkXlDuy6px" element={<Seo/>}></Route>
      <Route exact path="/cart" element={<CartContainer />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
