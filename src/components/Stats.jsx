//it just display what percent user packed from his list
const Stats = ({ numItems, numPacked, percentage }) => {
  return (
    <footer className="stats">
      <em>
        You have {numItems} items in your list, you packed {numPacked} from list
        which is ({percentage}%)
      </em>
    </footer>
  );
};

export default Stats;
