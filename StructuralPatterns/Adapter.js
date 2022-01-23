//
// It is allow to use a new interface with old objects
//

function OldTicket() {
  this.request = function (ticket) {
    const { start, end, overWeightLuggage } = ticket;
    return `From ${start} to ${end} with luggage ${overWeightLuggage}`;
  };
}

function NewTicket() {
  this.start = 0;
  this.end = 0;
  this.overWeightLuggage = 0;
  this.token = 0;

  this.login = function (token) {
    this.token = token;
  };

  this.setStart = function (start) {
    this.start = start;
  };

  this.setDestination = function (end) {
    this.end = end;
  };

  this.calculate = function (overWeightLuggage) {
    return `From ${this.start} to ${this.end} with luggage ${overWeightLuggage}`;
  };
}

function Adapter(credentials) {
  const pricing = new NewTicket();

  pricing.login(credentials);

  return {
    request: function (ticket) {
      const { start, end, overWeightLuggage } = ticket;

      pricing.setStart(start);
      pricing.setDestination(end);
      return pricing.calculate(overWeightLuggage);
    },
  };
}

const ticket = {
  start: "Bern",
  end: "London",
  overWeightLuggage: 20,
};

const getTicket = new OldTicket();
const adapter = new Adapter("token-242343");

const oldTicket = getTicket.request(ticket);
const newTicket = adapter.request(ticket);

console.log("Old ticket interface: " + oldTicket);
console.log("New ticket interface: " + newTicket);
