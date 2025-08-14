import styles from "./ShoppingCart.module.css";
import { RemoveShoppingCart } from "@mui/icons-material";

export function ShoppingCart({ cart, setCart, setCurrentPage }) {
  const handleRemoveAll = () => {
    setCart([]);
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

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

  const totalProducts = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const pixDiscount = totalProducts * 0.08;
  const totalPix = totalProducts - pixDiscount;

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div className={styles.progressStep}>Carrinho</div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.productSection}>
            <div className={styles.sectionHeader}>
              <h2>PRODUTO E SERVIÇO</h2>
              <button
                className={styles.removeAllButton}
                onClick={handleRemoveAll}
              >
                <RemoveShoppingCart /> REMOVER TODOS OS PRODUTOS
              </button>
            </div>
            {cart.length === 0 ? (
              <p className={styles.emptyCartMessage}>Seu carrinho está vazio.</p>
            ) : (
              cart.map((product) => (
                <div key={product.id} className={styles.productItem}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <p className={styles.productVendor}>
                      Vendido e entregue por:{" "}
                      <span className={styles.vendorName}>Kabum!</span>
                    </p>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productInfo}>
                      Com desconto no PIX:{" "}
                      <span className={styles.pixPrice}>
                        R$ {product.price.toFixed(2)}
                      </span>
                    </p>
                    <p className={styles.productInfo}>
                      Parcelado no cartão sem juros: R${" "}
                      {(product.price / 12).toFixed(2)}
                    </p>
                    <button
                      className={styles.removeItemButton}
                      onClick={() => handleRemoveItem(product.id)}
                    >
                      REMOVER
                    </button>
                  </div>
                  <div className={styles.productActions}>
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            product.id,
                            (product.quantity || 1) - 1
                          )
                        }
                      >
                        -
                      </button>
                      <span>{product.quantity || 1}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            product.id,
                            (product.quantity || 1) + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className={styles.productPricePix}>
                      R$ {product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className={styles.summaryContent}>
          <div className={styles.summaryBox}>
            <h2>RESUMO</h2>
            <div className={styles.summaryRow}>
              <span>Valor dos Produtos:</span>
              <span>R$ {totalProducts.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total a prazo:</span>
              <span>R$ {totalProducts.toFixed(2)}</span>
            </div>
            <div className={styles.pixSummary}>
              <span>Valor à vista no PIX:</span>
              <span className={styles.pixPrice}>
                R$ {totalPix.toFixed(2)}
              </span>
              <p className={styles.pixDiscount}>
                (Economize: R$ {pixDiscount.toFixed(2)})
              </p>
            </div>
            <button className={styles.continueButton}>CONTINUAR</button>
            <button
              className={styles.backButton}
              onClick={() => setCurrentPage("productList")}
            >
              VOLTAR PARA A LOJA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
