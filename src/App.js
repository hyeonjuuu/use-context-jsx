import "./App.css";
import Page from "./components/Page";
import { proxy, useSnapshot } from "valtio";
import { darkState } from "./valtio";

// const darkState = proxy({ isDark: false });

function App() {
  const isDark = useSnapshot(darkState).isDark; //Read-only 값만 가져옴.

  return (
    <Page isDark={isDark} toggleThema={() => (darkState.isDark = !isDark)} />
  );
}

export default App;
