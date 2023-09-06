import Item from "./Item";
import Stats from "./Stats";

import { useState, useEffect } from "react";

//List Component, which display what user select to his trip..
const PackingList = ({ data , onItemDeleted }) => {
/*   const [items, setItems] = useState(data); */

  //handle packed items number...
  const [packItems, setPackedItems] = useState(0);

/*   useEffect(() => {
    setItems(data);
  }, [data]);
 */
  /* const handleToggleItem = (id) => {
    //handle packed items number & Toggling...
    const updated_data = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    const newPackedItemCount = updated_data.filter(
      (item) => item.packed
    ).length;
    console.log(newPackedItemCount);
    setItems(updated_data);
    setPackedItems(newPackedItemCount);
  }; */

  const handleDeleteItem = (id) => {
    onItemDeleted(id)
    
  };
  return (
    <>
      <ul className="list">
        {data.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={() => handleDeleteItem(item.id)}
            /* onToggle={() => handleToggleItem(item.id)} */
          />
        ))}
      </ul>


    
    <Stats items={data} numPacked={packItems} />
    </>
  );
};

export default PackingList;
