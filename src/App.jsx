import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { PainelADM } from "./components/PainelADM";
import { Header } from "./components/Header";
import { ShoppingCart } from "./components/ShoppingCart";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState("login");

  function addToCart(product) {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  const handleRemoveAll = () => setCart([]);
  const handleRemoveItem = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));
  const handleQuantityChange = (id, qty) => {
    if (qty <= 0) handleRemoveItem(id);
    else
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
  };

  return (
    <>
      {currentPage === "login" && (
        <Login
          onLogin={() => setCurrentPage("productList")}
          onRegister={() => setCurrentPage("register")}
        />
      )}

      {currentPage === "register" && (
        <Register onBackToLogin={() => setCurrentPage("login")} />
      )}

      {currentPage === "productList" && (
        <>
          <Header cart={cart} setCurrentPage={setCurrentPage} />
          <ProductList products={products} addToCart={addToCart} />
        </>
      )}

      {currentPage === "shoppingCart" && (
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          setCurrentPage={setCurrentPage}
          handleRemoveAll={handleRemoveAll}
          handleRemoveItem={handleRemoveItem}
          handleQuantityChange={handleQuantityChange}
        />
      )}

      {currentPage === "manage" && (
        <>
          <Header cart={cart} setCurrentPage={setCurrentPage} />
          <PainelADM products={products} setProducts={setProducts} />
        </>
      )}
    </>
  );
}
