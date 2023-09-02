const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const Logo = () => {
  return <h1> 🌴 Far Away 🌴 </h1>;
};
const Form = () => {
  return (
    <div className="add-form">
      <h3>What's your needs for this trip?</h3>
    </div>
  );
};
const PackingList = () => {
  return (
    <ul className="list">
      LIST
      {initialItems.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span>
        {" "}
        {item.quantity} {item.description}
      </span>
    </li>
  );
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>
        You have X items in your list, you packed X from list which is (X%)
      </em>
    </footer>
  );
};

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
