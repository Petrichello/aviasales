import { useDispatch, useSelector } from "react-redux";

import {
  checkedAllAction,
  checkedOneAction,
  checkedThreeAction,
  checkedTwoAction,
  checkedWithoutAction,
  uncheckedAllAction,
  uncheckedOneAction,
  uncheckedThreeAction,
  uncheckedTwoAction,
  uncheckedWithoutAction,
} from "../../store/transfersReducer";
import { clearVisibleTicketsAction } from "../../store/ticketsReducer";

import classes from "./Transfers.module.scss";

function Transfers() {
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.transfersReducer.checkboxes);

  const onCheckedAll = () => {
    if (checkboxes.all) {
      dispatch(uncheckedAllAction());
      dispatch(uncheckedWithoutAction());
      dispatch(uncheckedOneAction());
      dispatch(uncheckedTwoAction());
      dispatch(uncheckedThreeAction());
      dispatch(clearVisibleTicketsAction());
    } else {
      dispatch(checkedAllAction());
      dispatch(checkedWithoutAction());
      dispatch(checkedOneAction());
      dispatch(checkedTwoAction());
      dispatch(checkedThreeAction());
      dispatch(clearVisibleTicketsAction());
    }
  };

  const onCheckedWithout = () => {
    if (checkboxes.all) {
      dispatch(uncheckedAllAction());
      dispatch(uncheckedWithoutAction());
      dispatch(clearVisibleTicketsAction());
    } else if (
      checkboxes.without === false &&
      checkboxes.one === true &&
      checkboxes.two === true &&
      checkboxes.three === true
    ) {
      dispatch(checkedAllAction());
      dispatch(checkedWithoutAction());
      dispatch(clearVisibleTicketsAction());
    } else if (checkboxes.without === false) {
      dispatch(checkedWithoutAction());
      dispatch(clearVisibleTicketsAction());
    } else {
      dispatch(uncheckedWithoutAction());
      dispatch(clearVisibleTicketsAction());
    }
  };

  const onCheckedOne = () => {
    if (checkboxes.all) {
      dispatch(uncheckedAllAction());
      dispatch(uncheckedOneAction());
      dispatch(clearVisibleTicketsAction());
    } else if (
      checkboxes.one === false &&
      checkboxes.without === true &&
      checkboxes.two === true &&
      checkboxes.three === true
    ) {
      dispatch(checkedAllAction());
      dispatch(checkedOneAction());
      dispatch(clearVisibleTicketsAction());
    } else if (checkboxes.one === false) {
      dispatch(checkedOneAction());
      dispatch(clearVisibleTicketsAction());
    } else {
      dispatch(uncheckedOneAction());
      dispatch(clearVisibleTicketsAction());
    }
  };

  const onCheckedTwo = () => {
    if (checkboxes.all) {
      dispatch(uncheckedAllAction());
      dispatch(uncheckedTwoAction());
      dispatch(clearVisibleTicketsAction());
    } else if (
      checkboxes.two === false &&
      checkboxes.without === true &&
      checkboxes.one === true &&
      checkboxes.three === true
    ) {
      dispatch(checkedAllAction());
      dispatch(checkedTwoAction());
      dispatch(clearVisibleTicketsAction());
    } else if (checkboxes.two === false) {
      dispatch(checkedTwoAction());
      dispatch(clearVisibleTicketsAction());
    } else {
      dispatch(uncheckedTwoAction());
      dispatch(clearVisibleTicketsAction());
    }
  };

  const onCheckedThree = () => {
    if (checkboxes.all) {
      dispatch(uncheckedAllAction());
      dispatch(uncheckedThreeAction());
      dispatch(clearVisibleTicketsAction());
    } else if (
      checkboxes.three === false &&
      checkboxes.without === true &&
      checkboxes.one === true &&
      checkboxes.two === true
    ) {
      dispatch(checkedAllAction());
      dispatch(checkedThreeAction());
      dispatch(clearVisibleTicketsAction());
    } else if (checkboxes.three === false) {
      dispatch(checkedThreeAction());
      dispatch(clearVisibleTicketsAction());
    } else {
      dispatch(uncheckedThreeAction());
      dispatch(clearVisibleTicketsAction());
    }
  };

  return (
    <section className={classes.transfers}>
      <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <ul className={classes.transfers__count}>
        <li>
          <label>
            <input
              id="all"
              className={`${classes.transfers__input} ${classes["visually-hidden"]}`}
              type="checkbox"
              onChange={() => onCheckedAll()}
              checked={checkboxes.all}
            />
            <div>Все</div>
          </label>
        </li>
        <li>
          <label>
            <input
              id="withoutTransfers"
              className={`${classes.transfers__input} ${classes["visually-hidden"]}`}
              type="checkbox"
              onChange={() => onCheckedWithout()}
              checked={checkboxes.without}
            />
            <div>Без пересадок</div>
          </label>
        </li>
        <li>
          <label>
            <input
              id="oneTransfer"
              className={`${classes.transfers__input} ${classes["visually-hidden"]}`}
              type="checkbox"
              onChange={() => onCheckedOne()}
              checked={checkboxes.one}
            />
            <div>1 пересадка</div>
          </label>
        </li>
        <li>
          <label>
            <input
              id="twoTransfers"
              className={`${classes.transfers__input} ${classes["visually-hidden"]}`}
              type="checkbox"
              onChange={() => onCheckedTwo()}
              checked={checkboxes.two}
            />
            <div>2 пересадки</div>
          </label>
        </li>
        <li>
          <label>
            <input
              id="threeTransfers"
              className={`${classes.transfers__input} ${classes["visually-hidden"]}`}
              type="checkbox"
              onChange={() => onCheckedThree()}
              checked={checkboxes.three}
            />
            <div>3 пересадки</div>
          </label>
        </li>
      </ul>
    </section>
  );
}

export default Transfers;
