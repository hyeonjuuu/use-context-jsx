import { RecoilRoot, useRecoilState } from "recoil";
import "./App.css";
import Page from "./components/Page";
import { darkState } from "./Recoil";

function App() {
  const [isDark, setIsDark] = useRecoilState(darkState);

  return <Page isDark={isDark} toggleThema={() => setIsDark(!isDark)} />;
}

export default App;
