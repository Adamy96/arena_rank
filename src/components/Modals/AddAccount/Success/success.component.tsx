import { Message } from "../Message";
import { useModals } from "@/hooks";
import styles from "./success.styles.module.scss";

const Success: React.FC<any> = () => {
  const { closeModal } = useModals();

  return (
    <div className={styles.success}>
      <Message
        title="Conta cadastrada"
        text="A partir de agora você pode acompanhar seu progresso no ranking. Boa sorte nos campos da justiça invocador!"
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
