import styles from "./MemoButton.module.css";

function MemoButton({ index, onClick , selected}) {
  let btnStyle = index === -1 ? styles.addBtn : styles.memoBtn;
  let selectedStyle = index == selected ? styles.selected : "";
  return (
    <button
      className={[btnStyle, selectedStyle].join(" ")}
      onClick={onClick}
      value={index}
    >
      {index === -1 ? "+" : index + 1}{" "}
    </button>
  );
}

export default MemoButton;
