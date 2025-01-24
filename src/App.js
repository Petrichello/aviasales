import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

import TicketsList from "./components/TicketsList/TicketsList";
import Transfers from "./components/Transfers/Transfers";
import { asyncAddTickets } from "./asyncAction/addTickets";
import TicketsSort from "./components/TicketsSort/TicketsSort";

import "./index.scss";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ticketsReducer.loading);
  const spinner = loading ? <Spin size="large" /> : null;

  useEffect(() => {
    dispatch(asyncAddTickets());
  }, [dispatch]);

  return (
    <>
      <header className="app__header" />
      <main className="app__main">
        <Transfers />
        {spinner}
        <section className="tickets">
          <TicketsSort />
          <TicketsList />
        </section>
      </main>
    </>
  );
}

export default App;
