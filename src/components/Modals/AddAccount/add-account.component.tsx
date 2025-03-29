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
    status: 200 | 201 | 404 | 500 | null;
  }>({
    playerName: "",
    status: null,
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
      {(form.status === 200 || form.status === 201) && <Success />}
      {(form.status === 500 || form.status === 404) && (
        <Error form={form} setForm={setForm} />
      )}
    </div>
  );
};

export default AddAccount;
