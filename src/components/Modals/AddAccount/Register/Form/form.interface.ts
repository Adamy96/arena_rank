export interface IFormProps {
  form: {
    playerName: string;
    status: 200 | 201 | 400 | 404 | 500 | null;
  };
  setForm: (e: any) => void;
}
