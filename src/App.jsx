import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";
import { useState, useEffect } from "react";
import Stats from "./components/Stats";

//the main content and rendering part
function App() {
  /* const [newItem, setNewItem] = useState(initialItems); */
  const [items, setItems] = useState([]);
  const [numPacked, setNumPacked] = useState(0);

  useEffect(() => {
    setNumPacked(items.filter((item) => item.packed).length);
  }, [items]);
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  const itemDeletedHandler = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const handleClear = (e) => {
    e.preventDefault();
    if (items.length === 0) return null;
    const confirmed = window.confirm("Are you sure to clear your list ?");
    if (confirmed) setItems([]);
  };

  const itemToggledHandler = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="App">
      <Logo />
      <Form onAdd={handleAddItem} onClear={handleClear} />
      <PackingList
        data={items}
        key={items.id}
        onItemDeleted={itemDeletedHandler}
        onItemToggled={itemToggledHandler}
      />
      <Stats items={items} numPacked={numPacked} />
    </div>
  );
}

export default App;
