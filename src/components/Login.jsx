import React from "react";
import styles from "./Login.module.css";
import flatechLogo from "../assets/imgs/LogoFlaTech.png";
import sideImage from "../assets/imgs/Side.jpeg";

export function Login({ onLogin, onRegister }) {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <img src={flatechLogo} alt="FlaTech" className={styles.logoImg} />
        <h2>TELA DE LOGIN</h2>
       <input type="text" placeholder="E-mail" />
<input type="password" placeholder="Senha" />
<button onClick={onLogin}>ENTRAR</button>
<button onClick={onRegister}>Não tem conta? Registre-se</button>
      </div>

      <div className={styles.loginRight}>
        <img src={sideImage} alt="Ilustração" className={styles.sideImg} />
      </div>
    </div>
  );
}
