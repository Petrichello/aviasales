import { add } from "date-fns";

import classes from "./Ticket.module.scss";

function Ticket({ price, carrier, segments }) {
  const getCorrectTime = (num) => {
    const date = new Date(segments[num].date);
    const arrivalDate = add(date, { minutes: segments[num].duration });

    const departureHours = `${date.getHours().toString().padStart(2, "0")}`;
    const departureMinutes = `${date.getMinutes().toString().padStart(2, "0")}`;
    const arrivalHours = `${arrivalDate.getHours().toString().padStart(2, "0")}`;
    const arrivalMinutes = `${arrivalDate.getMinutes().toString().padStart(2, "0")}`;

    return `${departureHours}:${departureMinutes} - ${arrivalHours}:${arrivalMinutes}`;
  };

  const getCorrectPrice = (sum) => {
    if (sum.length === 4) return `${sum.substr(0, 1)} ${sum.substr(1)}`;
    if (sum.length === 5) return `${sum.substr(0, 2)} ${sum.substr(2)}`;
    if (sum.length === 6) return `${sum.substr(0, 3)} ${sum.substr(3)}`;
    return sum;
  };

  const countTransfers = (number) => {
    if (number === 0) return "0 ПЕРЕСАДОК";
    if (number === 1) return "1 ПЕРЕСАДКА";
    return `${number} ПЕРЕСАДКИ`;
  };

  return (
    <li className={classes.ticket}>
      {getCorrectPrice(price.toString())} Р
      <img src={`https://pics.avs.io/99/36/${carrier}.png`} className={classes.logo} alt="logo" />
      <table className={classes.flight}>
        <thead>
          <tr>
            <th>
              {segments[0].origin} – {segments[0].destination}
            </th>
            <th>В ПУТИ</th>
            <th>{countTransfers(segments[0].stops.length)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getCorrectTime(0)}</td>
            <td>{`${Math.floor(segments[0].duration / 60)}ч ${segments[0].duration % 60}м`}</td>
            <td>{segments[0].stops.join(", ")}</td>
          </tr>
        </tbody>
      </table>
      <table className={classes.flight}>
        <thead>
          <tr>
            <th>
              {segments[1].origin} – {segments[1].destination}
            </th>
            <th>В ПУТИ</th>
            <th>{countTransfers(segments[1].stops.length)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getCorrectTime(1)}</td>
            <td>{`${Math.floor(segments[1].duration / 60)}ч ${segments[1].duration % 60}м`}</td>
            <td>{segments[1].stops.join(", ")}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

export default Ticket;
