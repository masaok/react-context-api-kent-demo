import "./App.css";
import { CountDisplay, Counter } from "./count";
import { CountProvider } from "./count-context";

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

export default App;
