import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <header className="header">
      <h1>Andy's Pizza Co.</h1>

      {isOpen && (
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Authentic Italian Cuisine
        </p>
      )}
    </header>
  );
}

function Pizza(props) {
  return (
    <li
      className={`pizza ${
        props.pizzaObj.soldOut ? "sold-out" : ""
      }`}
    >
      <img
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
      />

      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>

        <span>
          {props.pizzaObj.soldOut
            ? "SOLD OUT"
            : `$${props.pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}

function Menu() {
  const [search, setSearch] = useState("");

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <p>
        Freshly baked pizzas made with traditional Italian ingredients.
      </p>

      <input
        className="search"
        type="text"
        placeholder="Search for a pizza..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="pizzas">
        {filteredPizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}


function Order() {
  return (
    <div className="order">
      <p>We're currently open!</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>Sorry, we're closed.</p>
      )}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);