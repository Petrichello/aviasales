import { addTicketsAction, stopLoadingAction } from "../store/ticketsReducer";
import AviasalesService from "../services/AviasalesService";

const aviasalesService = new AviasalesService();

export const asyncAddTickets = () =>
  function add(dispatch) {
    aviasalesService.getSearchId().then((response) => {
      aviasalesService
        .getTickets(response.searchId)
        .then((res) => {
          dispatch(addTicketsAction(res.tickets));
          const intervalId = setInterval(() => {
            aviasalesService
              .getTickets(response.searchId)
              .then((newResponse) => {
                if (newResponse.stop) {
                  clearInterval(intervalId);
                  dispatch(stopLoadingAction());
                }
                dispatch(addTicketsAction(newResponse.tickets));
              })
              .catch((error) => {
                throw new Error(error);
              });
          }, 3000);
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  };
