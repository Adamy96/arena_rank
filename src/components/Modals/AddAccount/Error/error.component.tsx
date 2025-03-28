import { Message } from "../Message";
import styles from "./error.styles.module.scss";

const Error: React.FC<any> = ({ form, setForm }) => {
  const handleClick = () => {
    setForm({ ...form, status: "" });
  };

  return (
    <div className={styles.error}>
      <Message
        title="Ocorreu um erro"
        text="Nosso servidor não conseguiu processar a chamada. Por favor, tente novamente mais tarde. Se o erro persistir, entre em contato conosco através do email: arenarank@gmail.com"
        icon={{
          src: "/svgs/error.svg",
          alt: "Circulo vermelho com sinal de exclamação",
        }}
      />
      <button onClick={handleClick}>Voltar</button>
    </div>
  );
};

export default Error;
