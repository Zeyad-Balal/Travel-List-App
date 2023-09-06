import { useState } from "react";

//Form Component in which user can select the item and its quantity then add it to his list
const Form = ({ onAdd, onClear }) => {
  //element control first step
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //add handler while user click enter or add btn -> send data from the FORM to the LIST
  const handleSubmit = (e) => {
    e.preventDefault();
    //guard condition
    if (!description) return null;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    //console.log(newItem);
    //add new item
    onAdd(newItem);
    //After adding new item re-init the input fields
    setDescription("");
    setQuantity(1);
  };

  //sort handling...
  const [sortBy, setSortBy] = useState("input");

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What's your needs for this trip?</h3>
      <select
        type="number"
        value={quantity} //set initial value with the state variable, 2nd control element step
        //when change happened, update value with set method of state, 3rd control element step
        onChange={(e) => {
          setQuantity(Number(e.target.value)); //e.target (Always return String)-> get the element itself, value access the text field
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (
            num //loop on empty array with length 20 to put options using map()
          ) => (
            <option value={num} key={num}>
              {num}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>➕</button>
      <button onClick={onClear}>Clear List</button>
    </form>
  );
};
export default Form;
