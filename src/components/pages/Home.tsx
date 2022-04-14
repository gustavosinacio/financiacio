import { Header } from "../organisms";
import { Dashboard } from "../templates";

export function Home() {
  return (
    <div>
      <Header />
      <Dashboard />
      <h1>Home</h1>
      <p>
        This is my home layout. This should call a template and pass it the
        logic to its components
      </p>
    </div>
  );
}
