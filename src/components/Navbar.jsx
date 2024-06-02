import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = ({ cart, setCart , handleAdd, handleRemove }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [cartWithQuantities, setCartWithQuantities] = useState([]);

  const countItems = (item) => {
    return cart.filter((cartItem) => cartItem.id === item.id).length;
  };
  const handleLogOut = ()=>{
    localStorage.clear();
    navigate('signup')
  }
  const handleCheckOut = () =>{
    setCart([]);
    navigate('/checkout')
  }
  useEffect(() => {
    const itemsMap = {};
    cart.forEach((item) => {
      if (itemsMap[item.id]) {
        itemsMap[item.id].quantity += 1;
      } else {
        itemsMap[item.id] = { ...item, quantity: 1 };
      }
    });

    const updatedCartWithQuantities = Object.values(itemsMap);
    setCartWithQuantities(updatedCartWithQuantities);
  }, [cart]);

  return (
    <nav className="navbar bg-body-tertiary bg-indigo-600">
      <div className="container-fluid bg-indigo-600 text-white">
        <a className="navbar-brand flex flex-row p-4" href="#">
          <img
            src="../../public/utensils.png"
            alt="Logo"
            width={30}
            height={24}
            className="d-inline-block align-text-top text-white"
          />
          <h2 className="pl-4 text-white">Food's Restrorent</h2>
        </a>
        {pathname === "/foodItems" ? (
          <div
            className="flex p-6"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <img
              src="../../public/shopping-cart.png"
              width={25}
              height={25}
              alt="Logo"
            />
            <span className="h-[20px] w-[20px] bg-black text-sm text-center rounded-full absolute right-9 top-11">
              {cart.length}
            </span>
          </div>
        ) : null}
        {pathname === "/signin" ? (
          <button
            onClick={() => navigate("/signup")}
            type="button"
            class="btn btn-secondary"
          >
            SignUp
          </button>
        ) : pathname === "/signun" ? (
          <button
            onClick={() => navigate("/signin")}
            type="button"
            class="btn btn-secondary"
          >
            SignIn
          </button>
        ) : null}
        {
        pathname === "/checkout" ? (
          <button
            onClick={handleLogOut}
            type="button"
            class="btn btn-secondary"
          >
            Logout
          </button>
        ) : null}
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle text-black"
        >
          <div className="modal-box w-[600px]">
            <div className="flex">
              <h3 className="font-bold text-lg">Order summary</h3>
            </div>

            <div className="flex flex-col mt-6 content-center w-[full] justify-around">
              {cartWithQuantities.map((item, index) => (
                <div key={index} className="flex flex-row p-2 justify-between">
                  <div className="flex justify-between w-1/2">
                    <h3>{item.name}</h3>
                    <p>Quantity: {countItems(item)}</p>
                  </div>
                  <div className="flex justify-around">
                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className="btn btn-primary px-6"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemove(item)}
                      className=" btn btn-danger px-6 ml-2"
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h2>
                Total(INR):{" "}
                {cart.reduce((total, item) => total + item.price, 0)}
              </h2>
            </div>

            <div>
              <div className="modal-action">
                {cart.length > 0 ? (
                  <form method="dialog">
                  <button onClick={handleCheckOut} type="button" class="btn btn-primary">
                    Save And CheckOut
                  </button>
                  </form>
                ) : null}
                <form method="dialog">
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </nav>
  );
};

export default Navbar;
