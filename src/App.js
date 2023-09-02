const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

//Logo Components and Header of page
const Logo = () => {
  return <h1> 🌴 Far Away 🌴 </h1>;
};

//Form Component in which user can select the item and its quantity then add it to his list
const Form = () => {
  //add handler while user click enter -> send data from the FORM to the LIST
  const handleSubmissionEnter = (e) => {
    e.preventDefault();
  };

  //add handler while user click ADD button -> send data from the FORM to the LIST
  const handleSubmissionBtn = (e) => {
    e.preventDefault();
  };

  return (
    <form className="add-form" onSubmit={handleSubmissionEnter}>
      <h3>What's your needs for this trip?</h3>
      <select type="number">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." />
      <button onClick={handleSubmissionBtn}>➕</button>
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
