export interface IAddAccountProps {
  className?: string;
  form: {
    playerName: string;
    status: "success" | "error" | "";
  };
  setForm: (e: any) => void;
}
