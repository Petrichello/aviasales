export default class AviasalesService {
  async getSearchId() {
    const res = await fetch(`https://aviasales-test-api.kata.academy/search`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch, received ${res.status}`);
    }

    return res.json();
  }

  async getTickets(searchId) {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

    if (!res.ok) {
      throw new Error(`Couldn't fetch, received ${res.status}`);
    }

    return res.json();
  }
}
