import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

import Ticket from "../Ticket/Ticket";
import { addVisibleTicketsAction } from "../../store/ticketsReducer";

import classes from "./TicketsList.module.scss";

function TicketsList() {
  let elements;
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.transfersReducer.checkboxes);
  const sort = useSelector((state) => state.sortReducer.sort);
  const visibleTickets = useSelector((state) => state.ticketsReducer.visibleTickets);
  const tickets = useSelector((state) =>
    [...state.ticketsReducer.tickets]
      .sort((a, b) => {
        if (sort === "cheapest") {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        }
        if (sort === "fastest") {
          if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration)
            return 1;
          if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration)
            return -1;
          return 0;
        }
        return (
          a.price +
          a.segments[0].duration +
          a.segments[1].duration -
          (b.price + b.segments[0].duration + b.segments[1].duration)
        );
      })
      .filter(
        (ticket) =>
          (ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0 && checkboxes.without) ||
          (ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1 && checkboxes.one) ||
          (ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2 && checkboxes.two) ||
          (ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3 && checkboxes.three)
      )
  );

  const addVisibleTickets = () => {
    const number = visibleTickets.length;
    dispatch(addVisibleTicketsAction(tickets.slice(number, number + 5)));
  };

  if (visibleTickets.length > 0) {
    elements = visibleTickets.map((element) => {
      const id = uniqid();

      return <Ticket key={id} {...element} />;
    });
  } else if (tickets.length > 0) {
    elements = (
      <button type="button" className={classes.tickets__more} onClick={addVisibleTickets}>
        ПОКАЗАТЬ БИЛЕТЫ
      </button>
    );
  } else {
    elements = <div>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  }

  return { elements };
  // {visibleTickets.length > 0 ?
  //   (<ul className={classes["tickets__list"]}>
  //       {elements}
  //       <button className={classes["tickets__more"]} onClick={addVisibleTickets}>
  //         ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
  //       </button>
  //     </ul>
  //   )
  // :
  // tickets.length > 0 ? (
  //   <button className={classes["tickets__more"]} onClick={addVisibleTickets}>
  //     ПОКАЗАТЬ БИЛЕТЫ
  //   </button>
  // )
  // :
  //   <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
  // }
}

export default TicketsList;
