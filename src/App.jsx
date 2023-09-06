import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";
import { useState } from "react";
const initialItems = [
  /*{ id: 1, description: "charger", quantity: 1, packed: false },
  { id: 2, description: "laptop", quantity: 1, packed: false },
  { id: 3, description: "passport", quantity: 1, packed: false },*/
];

//the main content and rendering part
function App() {
  const [newItem, setNewItem] = useState(initialItems);
  const handleAddItem = (item) => {
    setNewItem([...newItem, item]);
  };

  const handleClear = (e) => {
    e.preventDefault();
    if (newItem.length === 0) return null;
    const confirmed = window.confirm("Are you sure to clear your list ?");
    if (confirmed) setNewItem([]);
  };
  console.log(newItem);
  return (
    <div>
      <Logo />
      <Form onAdd={handleAddItem} onClear={handleClear} />
      <PackingList data={newItem} key={newItem.id} />
    </div>
  );
}

export default App;
