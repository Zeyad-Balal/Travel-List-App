import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";

//the main content and rendering part
function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
