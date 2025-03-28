import Image from "next/image";
import styles from "./collapse-button.styles.module.scss";
import type { ICollapseButton } from "@/components/Header/Collapse-button/collapse-button.interface";

const CollapseButton: React.FC<ICollapseButton> = ({
  icon,
  size,
  backgroundColor,
  color,
  text,
  collapsed,
  onClick,
}) => {
  const buttonStyle = {
    backgroundColor,
    color,
    width: collapsed ? size : "auto",
    height: collapsed ? size : "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <button onClick={onClick} style={buttonStyle} className={styles.btn}>
      <Image
        src={icon.src}
        width={icon.width}
        height={icon.height}
        alt={icon.alt}
      />
      {!collapsed && <span>{text}</span>}
    </button>
  );
};

export default CollapseButton;
