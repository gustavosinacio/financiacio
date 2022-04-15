import { Header } from "../organisms";
import { Dashboard } from "../templates";
import * as Styles from "./Home.styles";

export function Home() {
  return (
    <Styles.Container>
      <Header />
      <Dashboard />
    </Styles.Container>
  );
}
