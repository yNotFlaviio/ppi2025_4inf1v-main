import styles from "./Header.module.css";
import { ShoppingCart, Person, Search, AdminPanelSettings } from "@mui/icons-material";
import flatechLogo from "../assets/imgs/LogoFlaTech.png";

export function Header({ cart, setCurrentPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.topHeaderContent}>
          <p>Frete Grátis acima de R$200</p>
          <p>8% de desconto à vista</p>
          <p>Parcele em até 12x sem juros</p>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContent}>
          <div className={styles.logo} onClick={() => setCurrentPage("productList")}>
            <img src={flatechLogo} alt="Logo FlaTech" />
          </div>

          <nav className={styles.navMenu}>
            <a href="#" onClick={() => setCurrentPage("productList")}>Todos os produtos</a>
            <a href="#">Celulares</a>
            <a href="#">Smartwatch</a>
            <a href="#">Casa inteligente</a>
            <a href="#">Áudio</a>
            <a href="#" className={styles.offerLink}>Ofertas</a>
          </nav>

          <div className={styles.rightSection}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Pesquise aqui seu celular novo" />
              <Search className={styles.searchIcon} />
            </div>

            <div className={styles.iconButton}>
              <Person />
            </div>

            <div className={styles.cartInfo} onClick={() => setCurrentPage("shoppingCart")}>
              <ShoppingCart />
              {cart.length > 0 && (
                <div className={styles.cartCounter}>{cart.length}</div>
              )}
            </div>

            <div
              className={styles.iconButton}
              title="Painel ADM"
              onClick={() => setCurrentPage("manage")}
            >
              <AdminPanelSettings />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
