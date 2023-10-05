import styles from "./style.module.scss";

export const IconsConatiner = (props) => {
  const { children, customClass, bgActive, text, onClick } = props;
  return (
    <div
      className={[
        styles.onHoverIcon,
        bgActive && styles.activeIcon,
        customClass,
      ]?.join(" ")}
      onClick={onClick}
    >
      <div className={styles.iconWrapper}>
        {children}
        {text?.length && <p>{text}</p>}
      </div>
    </div>
  );
};

