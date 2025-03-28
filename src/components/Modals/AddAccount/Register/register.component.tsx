import Image from "next/image";
import { useModals } from "@/hooks";
import type { IAddAccountProps } from "./register.interface";
import { Form } from "./Form";
import styles from "./register.styles.module.scss";
import { Message } from "../Message";

const AddAccount: React.FC<IAddAccountProps> = ({
  className,
  form,
  setForm,
}) => {
  return (
    <div className={`${styles.register}${className ? ` ${className}` : ""}`}>
      <Message
        title="Cadastre sua conta"
        text="Para participar do nosso sistema de ranqueamento é muito simples, você
          só precisa adicionar seu nome no jogo e após alguns minutos
          mostraremos você na tabela. Para mais informações sobre como o sistema
          de ranqueamento funciona, clique em “Informações” na página inicial."
      />
      <Form form={form} setForm={setForm} />
    </div>
  );
};

export default AddAccount;
