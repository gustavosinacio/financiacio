import money from "../../../assets/money.png";
import * as Styles from "./Header.styles";

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Styles.Container>
      <Styles.CentralizedContent>
        <img src={money} alt="financiacio" height="50" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          +registro
        </button>
      </Styles.CentralizedContent>
    </Styles.Container>
  );
}
