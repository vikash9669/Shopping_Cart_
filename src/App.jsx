import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import FoodItems from "./pages/FoodItems";
import CheckOut from "./pages/CheckOut";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const [cart, setCart] = useState([]);
  const handleAdd = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} Added to cart`);
  };
  const handleRemove = (itemToRemove) => {
    const indexToRemove = cart.findIndex((item) => item.id === itemToRemove.id);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart);
      alert(`${itemToRemove.name} Removed from cart`);
    }
  };
  // console.log(pathname, "11111111111111");
  return (
    <>
      <Navbar cart={cart} setCart = {setCart} handleAdd={handleAdd} handleRemove={handleRemove} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/foodItems"
            element={
              <FoodItems
                cart={cart}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
            }
          />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
     
    </>
  );
}

export default App;
