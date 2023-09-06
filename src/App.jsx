import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";
import { useState } from "react";
const initialItems = [];

//the main content and rendering part
function App() {
  const [newItem, setNewItem] = useState(initialItems);
  const handleAddItem = (item) => {
    setNewItem([...newItem, item]);
  };
  console.log(newItem);
  return (
    <div>
      <Logo />
      <Form onAdd={handleAddItem} />
      <PackingList data={newItem} key={newItem.id} />
    </div>
  );
}

export default App;
