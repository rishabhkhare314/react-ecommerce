import type React from "react";
import styles from "./SectionTitle.module.css";
import type { CSSProperties } from "react";

type SectionTitleProps = {
  title: string;
  position?: CSSProperties['textAlign'];
};
const SectionTitle: React.FC<SectionTitleProps> = ({ title, position="center" }) => {
  return <h2 className={`${styles.title}`} style={{textAlign: position ?? "center"}}>{title}</h2>;
};

export default SectionTitle;
