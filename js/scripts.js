// select movie; time of day; their age
// display price of movie ticket based on their age, time of day and movie such as first release, matinee and non-first release and senior

// Business Logic

function Ticket(age, time, movieType) {
  this.age = age,
  this.time = time,
  this.movieType = movieType
}




Ticket.prototype.ticketPrice = function() {
  let ticketValues = Object.values(Ticket);
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


// User Interface Logic
let ticket = new Ticket();

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const ageInput = parseInt($("#age").val());
    const timeInput = $("#time").val();
    const movieTypeInput = $("#movieType").val();
    let ticket = new Ticket(82, "matinee", "non-regular");
    let ticketValues = Object.values(ticket);
    console.log(ticketValues);
    console.log(ticket);
    
    let finalPriceTicket = ticket.ticketPrice();
    $("#result").text(finalPriceTicket);
    console.log(finalPriceTicket);
  });
  
});