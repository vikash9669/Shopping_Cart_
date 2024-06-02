import React, { useState } from "react";

const FoodItems = ({cart, handleAdd, handleRemove}) => {
 

  const items = [
    {
      name: "Hamburger",
      price: 200,
      image: "burger.jpeg",
      id: 1,
    },
    {
      name: "Fries",
      price: 100,
      image: "fries.jpeg",
      id: 2,
    },
    {
      name: "Coke",
      price: 50,
      image: "coke.jpeg",
      id: 3,
    },
    {
      name: "Pepsi",
      price: 50,
      image: "pepsi.jpeg",
      id: 4,
    },
  ];

  return (
    <div className="container justify-center">
      <div className="w-full m-4 flex flex-wrap justify-center content-center">
        {items.map((item, index) => (
          <div className="p-4" key={index}>
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={`../../public/${item.image}`}
                width={150}
                height={154}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-text">Price: {item.price}</p>
                <div className="flex flex-row m-2">
                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className="btn btn-info px-4"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemove(item)}
                    className={
                      cart.length ? "btn btn-danger px-4" : "btn btn-light disabled px-4"
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default FoodItems;
