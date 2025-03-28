import Image from "next/image";
import type { IMessageProps } from "./message.interface";
import styles from "./message.styles.module.scss";

const Message: React.FC<IMessageProps> = ({ title, text, icon }) => {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
        {icon && <Image src={icon.src} width={20} height={20} alt={icon.alt} />}
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Message;
