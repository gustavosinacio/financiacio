import money from "../../../assets/money.png";
import * as Styles from "./Header.styles";

export function Header({
  onOpenNewTransactionModal,
  onOpenImportModal,
}: HeaderProps) {
  return (
    <Styles.Container>
      <Styles.CentralizedContent>
        <img src={money} alt="financiacio" height="50" />

        <div>
          <button type="button" onClick={onOpenImportModal}>
            importar
          </button>
          <button type="button" onClick={onOpenNewTransactionModal}>
            +registro
          </button>
        </div>
      </Styles.CentralizedContent>
    </Styles.Container>
  );
}
