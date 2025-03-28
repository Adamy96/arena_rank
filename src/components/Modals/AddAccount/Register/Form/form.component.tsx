import type { IFormProps } from "./form.interface";
import styles from "./form.styles.module.scss";

const Form: React.FC<IFormProps> = ({ form, setForm }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      playerName: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      status: "error",
    });
  };

  return (
    <form className={styles.form} method="POST" onSubmit={handleSubmit}>
      <label htmlFor="playerName">Nome de usuário + Tag</label>
      <input
        value={form.playerName}
        type="text"
        id="playerName"
        name="playerName"
        onChange={handleChange}
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Form;
