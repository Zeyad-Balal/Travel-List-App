import { useState } from "react";

//Static Data
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  //{ id: 4, description: "tent", quantity: 2, packed: true },
  //{ id: 5, description: "water", quantity: 5, packed: true },
  //{ id: 6, description: "fish", quantity: 9, packed: false },
];

//Logo Components and Header of page
const Logo = () => {
  return <h1> 🌴 Far Away 🌴 </h1>;
};

//Form Component in which user can select the item and its quantity then add it to his list
const Form = () => {
  //element control first step
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //add handler while user click enter or add btn -> send data from the FORM to the LIST
  const handleSubmit = (e) => {
    e.preventDefault();
    //guard condition
    if (!description) return null;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    //After adding new item re-init the input fields
    setDescription("");
    setQuantity(1);
  };

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
    </form>
  );
};

//List Component, which display what user select to his trip..
const PackingList = () => {
  return (
    <ul className="list">
      {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

//child of List -> which receive the data from its parent to display
const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

//it just display what percent user packed from his list
const Stats = () => {
  return (
    <footer className="stats">
      <em>
        You have X items in your list, you packed X from list which is (X%)
      </em>
    </footer>
  );
};

//the main content and rendering part
function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
