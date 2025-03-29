import { Message } from "../Message";
import styles from "./error.styles.module.scss";

const Error: React.FC<any> = ({ form, setForm }) => {
  const handleClick = () => {
    setForm({ ...form, status: "" });
  };

  const getTitle = () => {
    let title = "";

    switch (form.status) {
      case 404:
        title = "Jogador não encontrado";
        break;
      case 500:
        title = "Ocorreu um erro";
        break;
      default:
        title = "Ocorreu um erro";
    }

    return title;
  };

  const getText = () => {
    let text = "";

    switch (form.status) {
      case 404:
        text = `Não foi possível encontrar o jogador ${form.playerName}. Verifique a escrita e tente novamente. Se o problema persistir, entre em contato conosco através do email: arenarank@gmail.com`;
        break;
      case 500:
        text =
          "Nosso servidor não conseguiu processar a chamada. Por favor, tente novamente mais tarde. Se o problema persistir, entre em contato conosco através do email: arenarank@gmail.com";
        break;
      default:
        text =
          "Nosso servidor não conseguiu processar a chamada. Por favor, tente novamente mais tarde. Se o problema persistir, entre em contato conosco através do email: arenarank@gmail.com";
    }

    return text;
  };

  return (
    <div className={styles.error}>
      <Message
        title={getTitle()}
        text={getText()}
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
