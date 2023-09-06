import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

//the main content and rendering part
function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList data={initialItems} />
    </div>
  );
}

export default App;
