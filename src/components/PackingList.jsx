import Item from "./Item";
import { useState } from "react";

//List Component, which display what user select to his trip..
const PackingList = ({ item, data }) => {
  const [items, setItems] = useState(data);

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
