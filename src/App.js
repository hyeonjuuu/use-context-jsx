import { useAtom, useAtomValue, useSetAtom } from "jotai";
import "./App.css";
import Page from "./components/Page";
import { darkAtom } from "./jotai";

function App() {
  // #useAtom
  // const [isDark, setIsDark] = useAtom(darkAtom);

  // #useAtomValue / useSetAtom
  const isDark = useAtomValue(darkAtom);
  const setIsDark = useSetAtom(darkAtom);

  return <Page isDark={isDark} toggleThema={() => setIsDark(!isDark)} />;
}

export default App;
