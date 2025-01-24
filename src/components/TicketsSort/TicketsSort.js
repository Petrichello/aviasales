import { useDispatch } from "react-redux";

import { cheapestAction, fastestAction, optimalAction } from "../../store/sortReducer";
import { clearVisibleTicketsAction } from "../../store/ticketsReducer";

import classes from "./TicketsSort.module.scss";

function TicketsSort() {
  const dispatch = useDispatch();

  const onToggleSort = (e) => {
    if (e.target.defaultValue === "cheapest") {
      dispatch(cheapestAction);
      dispatch(clearVisibleTicketsAction());
    } else if (e.target.defaultValue === "fastest") {
      dispatch(fastestAction());
      dispatch(clearVisibleTicketsAction());
    } else if (e.target.defaultValue === "optimal") {
      dispatch(optimalAction());
      dispatch(clearVisibleTicketsAction());
    }
  };

  return (
    <ul className={classes.tickets__sort}>
      <li>
        <label>
          <input
            type="radio"
            name="sort"
            value="cheapest"
            className={`${classes.sort__input} ${classes["visually-hidden"]}`}
            onClick={(r) => onToggleSort(r)}
            defaultChecked
          />
          <div className={classes.radio__button}>САМЫЙ ДЕШЕВЫЙ</div>
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            name="sort"
            value="fastest"
            className={`${classes.sort__input} ${classes["visually-hidden"]}`}
            onClick={(e) => onToggleSort(e)}
          />
          <div className={classes.radio__button}>САМЫЙ БЫСТРЫЙ</div>
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            name="sort"
            value="optimal"
            className={`${classes.sort__input} ${classes["visually-hidden"]}`}
            onClick={(e) => onToggleSort(e)}
          />
          <div className={classes.radio__button}>ОПТИМАЛЬНЫЙ</div>
        </label>
      </li>
    </ul>
  );
}

export default TicketsSort;
