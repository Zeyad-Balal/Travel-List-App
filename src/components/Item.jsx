//child of List -> which receive the data from its parent to display
const Item = ({ item, onDelete, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="s">x{item.quantity}</span> {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
      {/* <button style={{ backgroundColor: "white" }}>+</button> */}
    </li>
  );
};
export default Item;
