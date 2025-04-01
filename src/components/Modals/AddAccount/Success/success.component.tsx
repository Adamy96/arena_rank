import { Message } from "../Message";
import { useModals } from "@/hooks";
import styles from "./success.styles.module.scss";

const Success: React.FC<any> = ({ form }) => {
  const { closeModal } = useModals();

  const getTitle = () => {
    let title = "";

    switch (form.status) {
      case 200 | 201:
        title = "Conta cadastrada";
        break;
      case 400:
        title = "Conta já cadastrada";
        break;
      default:
        title = "Conta cadastrada";
    }

    return title;
  };

  const getText = () => {
    let text = "";

    switch (form.status) {
      case 200 | 201:
        text = `A partir de agora você pode acompanhar seu progresso no ranking. Boa sorte nos campos da justiça invocador!`;
        break;
      case 400:
        text =
          "A sua conta já consta em nosso sistema! Você já pode acompanhar seu progresso no ranking. Boa sorte nos campos da justiça invocador!";
        break;
      default:
        text =
          "A partir de agora você pode acompanhar seu progresso no ranking. Boa sorte nos campos da justiça invocador!";
    }

    return text;
  };

  return (
    <div className={styles.success}>
      <Message
        title={getTitle()}
        text={getText()}
        icon={{
          src: "/svgs/success.svg",
          alt: "Circulo verde com um sinal de certo",
        }}
      />
      <button onClick={() => closeModal("addAccount")}>Fechar</button>
    </div>
  );
};

export default Success;
