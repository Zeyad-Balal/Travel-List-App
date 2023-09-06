//it just display what percent user packed from his list
const Stats = ({ items, numPacked }) => {
  const numItems = items.length;
  const percentage = Math.round((numPacked / numItems) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding your list</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You're ready to go now, have a safe flight ✈️"
          : `You have ${numItems} items in your list, you packed ${numPacked} from list
        which is (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
