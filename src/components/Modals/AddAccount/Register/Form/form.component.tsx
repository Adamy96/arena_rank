import type { IFormProps } from "./form.interface";
import { register } from "@/services/register";
import styles from "./form.styles.module.scss";

import { useLoading } from "@/hooks";

const Form: React.FC<IFormProps> = ({ form, setForm }) => {
  const { setFullPageLoading } = useLoading();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      playerName: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.playerName.includes("#")) return null;

    const [nickName, tag] = form.playerName.split("#");
    setFullPageLoading(true);
    const response = await register(nickName, tag);
    setForm({
      ...form,
      status: response.status,
    });
    setFullPageLoading(false);
  };

  return (
    <form className={styles.form} method="POST" onSubmit={handleSubmit}>
      <label htmlFor="playerName">Nome no jogo + #BR1</label>
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
