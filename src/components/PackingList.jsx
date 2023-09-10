import React from "react";
import Item from "./Item";

const PackingList = ({ data, onItemDeleted, onItemToggled }) => {
  const handleDeleteItem = (id) => {
    onItemDeleted(id);
  };

  return (
    <>
      <ul className="list">
        {data.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={() => handleDeleteItem(item.id)}
            onToggle={() => onItemToggled(item.id)}
          />
        ))}
      </ul>
      {/*  <Stats items={data} /> */}
    </>
  );
};

export default PackingList;
