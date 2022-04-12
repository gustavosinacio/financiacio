import { Header } from "../organisms";
import { Dashboard } from "../templates";

export function Home() {
  return (
    <div>
      <Header />
      <Dashboard />
      <h1>Home</h1>
      <p>
        This is my home layout. Here should be all the components to make my
        home and the logic should be received from the outside.
      </p>
    </div>
  );
}
