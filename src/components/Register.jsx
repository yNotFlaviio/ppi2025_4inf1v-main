import React from "react";
import styles from "./Register.module.css";

export function Register({ onBackToLogin }) {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.logoText}>LOGO</h1>
        <h2>Cadastro</h2>

        <label>E-mail:</label>
        <input type="email" placeholder="Digite seu e-mail" />

        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />

        <label>Confirmar Senha:</label>
        <input type="password" placeholder="Confirme sua senha" />

        <button type="button" onClick={onBackToLogin}>
          CADASTRAR
        </button>

        <p>
          Já tem conta?{" "}
          <button
            className={styles.linkButton}
            type="button"
            onClick={onBackToLogin}
          >
            Voltar para Login
          </button>
        </p>
      </div>

      <div className={styles.imageBox}>
        <div className={styles.imagePlaceholder}></div>
      </div>
    </div>
  );
}
