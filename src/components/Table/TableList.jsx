import { Table } from "react-bootstrap";
import aceIcon from "../../assets/home/cards.svg";
import btcIcon from "../../assets/home/btc.svg";
import style from "./table.module.css";

const tableData = [
  {
    id: 1,
    game: "Lorem",
    icon: aceIcon,
    user: "Otto",
    time: "02:15 PM",
    betAmount: "0.00211",
    multiplier: "0.01x",
    payout: "0.0721",
  },
  {
    id: 1,
    game: "Lorem",
    icon: aceIcon,
    user: "Otto",
    time: "02:15 PM",
    betAmount: "0.00211",
    multiplier: "0.01x",
    payout: "0.0721",
  },
  {
    id: 1,
    game: "Lorem",
    icon: aceIcon,
    user: "Otto",
    time: "02:15 PM",
    betAmount: "0.00211",
    multiplier: "0.01x",
    payout: "0.0721",
  },
  {
    id: 1,
    game: "Lorem",
    icon: aceIcon,
    user: "Otto",
    time: "02:15 PM",
    betAmount: "0.00211",
    multiplier: "0.01x",
    payout: "0.0721",
  },
  {
    id: 1,
    game: "Lorem",
    icon: aceIcon,
    user: "Otto",
    time: "02:15 PM",
    betAmount: "0.00211",
    multiplier: "0.01x",
    payout: "0.0721",
  },
  {
    id: 1,
    game: "Lorem",
    icon: aceIcon,
    user: "Otto",
    time: "02:15 PM",
    betAmount: "0.00211",
    multiplier: "0.01x",
    payout: "0.0721",
  },
];

const TableList = () => {
  return (
    <table className={`${style.responsive_table}`} striped bordered hover>
      <thead>
        <tr className={`text-center ${style.table_head}`}>
          <th>Game </th>
          <th>User </th>
          <th>Time </th>
          <th>Bet Amount </th>
          <th>Multiplier </th>
          <th>Payout </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData) => (
          <tr className={`${style.table_row} text-center`} key={rowData.id}>
            <td>
              <span className="d-flex justify-content-center">
                <img src={rowData.icon} className="pe-2" alt="" />
                <p className="pt-2">{rowData.game}</p>
              </span>
            </td>
            <td>{rowData.user}</td>
            <td>{rowData.time}</td>
            <td>
              <span className="d-flex justify-content-center">
                <p className="pt-2">{rowData.betAmount}</p>
                <img src={btcIcon} className="ps-2" width="35px" alt="btc" />
              </span>
            </td>
            <td>{rowData.multiplier}</td>
            <td>
              <span className="d-flex justify-content-center">
                <p className="pt-2">{rowData.payout}</p>
                <img src={btcIcon} className="ps-2" width="35px" alt="btc" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
