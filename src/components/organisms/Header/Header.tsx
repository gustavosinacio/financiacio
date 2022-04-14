import money from "../../../assets/money.png";
import * as Styles from "./Header.styles";

export function Header() {
  return (
    <Styles.Container>
      <Styles.CentralizedContent>
        <img src={money} alt="financiacio" height="50" />

        <button type="button">+registro</button>
      </Styles.CentralizedContent>
    </Styles.Container>
  );
}
