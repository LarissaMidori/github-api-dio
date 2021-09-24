import { ResetCSS } from "./components/global/resetCSS";
import Layout from "./components/layout";
import Profile from "./components/profile";

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout />
      <Profile />
    </main>
  );
}

export default App;
