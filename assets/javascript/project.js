console.log("Great Work Team!");

$.ajax({
    url: "https://api.seatgeek.com/2/events?client_id=	NDMxMTUyMXwxNTE5Njg2MDU1Ljkx&client_secret=17b84706c152b783115f87b854b2bf4963fb5426ed37b6d41c51ce728715d710",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(events.datetime_utc);
  });