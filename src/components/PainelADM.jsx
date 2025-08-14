import { useState } from "react";
import styles from "./PainelADM.module.css";

export function PainelADM({ products, setProducts }) {
  const [form, setForm] = useState({ id: "", title: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = parseFloat(form.price);
    if (!form.title || isNaN(price)) return;

    if (editingId) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingId ? { ...form, id: editingId, price } : p))
      );
      setEditingId(null);
    } else {
      const newId = Date.now().toString();
      setProducts((prev) => [...prev, { ...form, id: newId, price }]);
    }

    setForm({ id: "", title: "", price: "" });
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    if (editingId === id) {
      setForm({ id: "", title: "", price: "" });
      setEditingId(null);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Painel Administrativo</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="title"
          placeholder="Nome do Produto"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="Preço"
          type="number"
          value={form.price}
          onChange={handleChange}
        />
        <button type="submit">{editingId ? "Atualizar" : "Adicionar"}</button>
      </form>

      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id} className={styles.item}>
            <div>
              <strong>{product.title}</strong>
              <p>R$ {product.price.toFixed(2)}</p>
            </div>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => handleDelete(product.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
