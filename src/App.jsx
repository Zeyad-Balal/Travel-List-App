import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  //{ id: 4, description: "tent", quantity: 2, packed: true },
  //{ id: 5, description: "water", quantity: 5, packed: true },
  //{ id: 6, description: "fish", quantity: 9, packed: false },
];

//the main content and rendering part
function App() {
  const numItems = initialItems.length;
  const numPacked = initialItems.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div>
      <Logo />
      <Form />
      <PackingList data={initialItems} />
      <Stats
        numItems={numItems}
        numPacked={numPacked}
        percentage={percentage}
      />
    </div>
  );
}

export default App;
