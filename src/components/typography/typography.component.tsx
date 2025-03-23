import { createElement } from "react";
import type { ITypography } from "./typography.interface";
import styles from "./typography.styles.module.scss";

const Typography: React.FC<ITypography> = ({
  variant,
  weight,
  className,
  children,
}) => {
  return createElement(variant, { className: `${styles.heading}` }, children);
};

export default Typography;
