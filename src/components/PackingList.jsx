import Item from "./Item";
import { useState } from "react";

//Static Data
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  //{ id: 4, description: "tent", quantity: 2, packed: true },
  //{ id: 5, description: "water", quantity: 5, packed: true },
  //{ id: 6, description: "fish", quantity: 9, packed: false },
];

//List Component, which display what user select to his trip..
const PackingList = ({ item }) => {
  const [items, setItems] = useState(initialItems);

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  /*const handleAddItem = (item) => {
    setItems((items) => [...items, items]);
  };*/

  const handleDeleteItem = (id) => {
    console.log(id);
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <ul className="list">
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDelete={() => handleDeleteItem(item.id)}
          onToggle={() => handleToggleItem(item.id)}
        />
      ))}
    </ul>
  );
};

export default PackingList;
