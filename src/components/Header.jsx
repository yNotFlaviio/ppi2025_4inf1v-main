import styles from "./Header.module.css";
import { ShoppingCart, Person, Search } from "@mui/icons-material";
import flatechLogo from "../assets/imgs/Logo - FlaTech.png"; // Assumindo que o nome do arquivo é esse

export function Header({ cart, setCurrentPage }) { // Adicionei setCurrentPage aqui
  return (
    <header className={styles.header}>
      {/* Top Header - a barra laranja superior */}
      <div className={styles.topHeader}>
        <div className={styles.topHeaderContent}>
          <p>Frete Grátis acima de R$200*</p>
          <p>8% de desconto à vista</p>
          <p>Parcele em até 12x sem juros</p>
        </div>
      </div>
      
      {/* Main Header - a barra principal */}
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContent}>
          {/* Logo da Xiaomi - vamos usar uma div placeholder */}
          <div className={styles.logo} onClick={() => setCurrentPage("productList")}>
            <img src={flatechLogo} alt="Logo FlaTech" />
          </div>

          {/* Menu de Navegação */}
          <nav className={styles.navMenu}>
            <a href="ProductList.jsx">Todos os produtos</a>
            <a href="#">Celulares</a>
            <a href="#">Smartwatch</a>
            <a href="#">Casa inteligente</a>
            <a href="#">Áudio</a>
            <a href="#" className={styles.offerLink}>Ofertas</a>
          </nav>

          {/* Barra de Busca e Ícones do Carrinho/Login */}
          <div className={styles.rightSection}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Pesquise aqui seu celular novo" />
              <Search className={styles.searchIcon} />
            </div>
            
            <div className={styles.iconButton}>
              <Person />
            </div>

            {/* A div do carrinho agora tem um evento onClick */}
            <div className={styles.cartInfo} onClick={() => setCurrentPage("shoppingCart")}>
              <ShoppingCart />
              {cart.length > 0 && (
                <div className={styles.cartCounter}>{cart.length}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}