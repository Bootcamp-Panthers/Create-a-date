
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
    format: 'yyyy-mm-dd'
});

var submit;
$(".horizontal").hide();



function displayCards(colName) {
    for (var i = 0; i < 10; i++) {
        var repeat = $("<div>");
        repeat.addClass("card")
        repeat.addClass("horizontal")


        var cardStack = $("<div class = 'card-stacked'>")
        var cardContent = $("<div class = 'card-content'>")
        var showName = $("<p>").text("Resturant Name: ")
        var showAddress = $("<p>").text("Address:  ")
        var showCuisine = $("<p>").text("Cuisine:  ")
        var showConfirm = $("<div class = 'card-action'>")
        var confirm = $("<a href='#' class ='confirm'>Confirm</a>")
        var showImage = $("<div class = 'card-image'>")
        var image = $("<img src ='https://lorempixel.com/100/190/nature/6'>")


        $(repeat).append(showName);
        $(repeat).append(showAddress);
        $(repeat).append(showCuisine);


        $(cardStack).append(cardContent);
        $(repeat).append(cardStack);

        $(cardContent).append(showName);
        $(cardContent).append(showAddress);
        $(cardContent).append(showCuisine);

        $(showImage).append(image);
        $(repeat).prepend(showImage);
        
        $(cardStack).append(showConfirm);
        $(showConfirm).append(confirm);
        
        $(colName).append(repeat);
    }
}
$("#submitButton").on("click", function () {
    displayCards("#zomato")
    displayCards("#seatgeek")

    $(".horizontal").show();
})

function moveResults() {
    $("#card-action").on("click", function () {

    })
}


console.log("Great Work Team!");

$.ajax({
    url: "https://api.seatgeek.com/2/events?client_id=	NDMxMTUyMXwxNTE5Njg2MDU1Ljkx&client_secret=17b84706c152b783115f87b854b2bf4963fb5426ed37b6d41c51ce728715d710",
    method: "GET"
}).then(function (response) {
    // displays response in debugger when we do our AJAX call.
    console.log(response);
    // setting the event to a variable and console logging the response.
    var dateString = response.events[0].datetime_utc;
    console.log(dateString);
    // creating a variable for our date string
    var momentObj = moment(dateString);
    console.log(momentObj);
    // moment is a library that is used to manipulate and change date and time
    // creating a variable to format the moment object to the date an time we want.
    var momentString = momentObj.format('dddd, MMMM Do YYYY, h:mm:ss a');
    console.log(momentString);
});
