"use client";

import { useState } from "react";
import Image from "next/image";
import { useModals } from "@/hooks";
import type { IAddAccountProps } from "./add-account.interface";
import { Register } from "./Register";
import { Success } from "./Success";
import { Error } from "./Error";
import styles from "./add-account.styles.module.scss";

const AddAccount: React.FC<IAddAccountProps> = ({ className }) => {
  const { closeModal } = useModals();
  const [form, setForm] = useState<{
    playerName: string;
    status: "success" | "error" | "";
  }>({
    playerName: "",
    status: "",
  });

  return (
    <div className={`${styles.addAccount}${className ? ` ${className}` : ""}`}>
      <Image
        onClick={() => closeModal("addAccount")}
        src="/svgs/close.svg"
        width={24}
        height={24}
        alt="Xis branco"
        className={styles.closeBtn}
      />

      {!form.status && <Register form={form} setForm={setForm} />}
      {form.status === "success" && <Success />}
      {form.status === "error" && <Error form={form} setForm={setForm} />}
    </div>
  );
};

export default AddAccount;
