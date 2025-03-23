export interface ITypography {
  variant: "body" | "caption";
  weight?: "300" | "400" | "500" | "600" | "700";
  className?: string;
  children: React.ReactNode;
}
