// select movie; time of day; their age
// display price of movie ticket based on their age, time of day and movie such as first release, matinee and non-first release and senior

// Business Logic

function Ticket(age, time, movieType) {
  this.age = age,
  this.time = time,
  this.movieType = movieType
}
// Regular ticket price is $14

let ticketValues = Object.values(Ticket);
console.log(ticketValues);


Ticket.prototype.ticketPrice = function() {
  let regularPriceTicket = 14;
  
  ticketValues.forEach(function() {
    if (ticketValues[0] >= 60 && ticketValues[1] === "matinee" && ticketValues[2] === "non-regular" ) {
      regularPriceTicket -= 6;
      return regularPriceTicket;
    } else if (ticketValues[0] >= 60 && ticketValues[1] === "matinee" || ticketValues[0] >= 60 && ticketValues[2] === "non-regular" || ticketValues[1] === "matinee" && ticketValues[2] === "non-regular") {
      regularPriceTicket -= 4;
      return regularPriceTicket;
    } else if (ticketValues[0] >= 60 || ticketValues[1] === "matinee" || ticketValues[2] === "non-regular" ) {
    regularPriceTicket -= 2;
    return regularPriceTicket;
    } else {
      return regularPriceTicket;
    }
  });
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const ageInput = parseInt($("#age").val());
    const timeInput = $("#time").val();
    const movieTypeInput = $("#movieType").val();

  });
  
});