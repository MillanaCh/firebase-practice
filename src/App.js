import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard"
import { Route, Routes } from "react-router-dom";
import Support from "./Pages/Support";
import CardProductList from "./Pages/CardProductList";
import MakeAnOrder from "./Pages/MakeAnOrder";
import Login from "./Pages/Login";
import Order from "./Pages/extraPages/Order";
import AddProduct from "./Pages/extraPages/AddProduct";
import SeeProducts from "./Pages/extraPages/SeeProduct";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/cart-description" element={<CardProductList/>}/>
      <Route path="/make-order" element={<MakeAnOrder/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="orders" element={<Order/>}/>
        <Route path="add-product" element={<AddProduct/>}/>
        <Route path="see-product" element={<SeeProducts/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
