import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { ShoppingCart } from './components/ShoppingCart';
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("productList"); // Estado para controlar qual página é exibida

  // Adiciona ou atualiza a quantidade de um produto no carrinho
  function addToCart(product) {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  // Remove todos os itens do carrinho
  const handleRemoveAll = () => {
    setCart([]);
  };

  // Remove um item específico do carrinho
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Altera a quantidade de um item no carrinho
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <>
      <Header cart={cart} setCurrentPage={setCurrentPage} />
      
      {/* Renderização condicional para exibir a página correta */}
      {currentPage === "productList" && <ProductList addToCart={addToCart} />}
      {currentPage === "shoppingCart" && (
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          handleRemoveAll={handleRemoveAll}
          handleRemoveItem={handleRemoveItem}
          handleQuantityChange={handleQuantityChange}
        />
      )}
    </>
  );
}