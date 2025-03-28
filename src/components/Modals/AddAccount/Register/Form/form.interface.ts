export interface IFormProps {
  form: {
    playerName: string;
    status: "success" | "error" | "";
  };
  setForm: (e: any) => void;
}
