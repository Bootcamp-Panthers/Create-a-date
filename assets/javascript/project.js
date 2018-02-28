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




/*
$.ajax({
    url: "https://api.seatgeek.com/2/events?venue.state=CA&venue.city=irvine&client_id=NDMxMTUyMXwxNTE5Njg2MDU1Ljkx&client_secret=17b84706c152b783115f87b854b2bf4963fb5426ed37b6d41c51ce728715d710",
    method: "GET"
}).then(function (response) {

    for (var i = 0; i < response.events.length; i++) {
        console.log(response);
        console.log(response.events[i]);
        console.log(response.events[i].title);
        console.log(response.events[i].url);
        console.log(response.events[i].venue.address);
        console.log(response.events[i].venue.city);
        console.log(response.events[i].venue.postal_code);
    }

}); */

$.ajax({
    url: "https://api.seatgeek.com/2/events?&datetime_local.gte=2018-03-10T00:00:00&datetime_local.lte=2018-03-10T23:59:59&venue.state=CA&venue.city=irvine&client_id=NDMxMTUyMXwxNTE5Njg2MDU1Ljkx&client_secret=17b84706c152b783115f87b854b2bf4963fb5426ed37b6d41c51ce728715d710",
    method: "GET"
}).then(function (response) {
    for (var i = 0; i < response.events.length; i++) {
        console.log(response);
        console.log(response.events[i]);
        console.log(response.events[i].datetime_utc);
        console.log(response.events[i].title);
        console.log(response.events[i].url);
        console.log(response.events[i].venue.address);
        console.log(response.events[i].venue.city);
        console.log(response.events[i].venue.postal_code);
    }
});
// Reference for seatgeek datetime
//https://api.seatgeek.com/2/list?use_v2=1&uuid=3ebc9d23-ed60-2484-4d19-7e5574ce26f1&horizontal_per_page=20&geoip=true&datetime_local.gte=2018-03-01T00:00:00&datetime_local.lte=2018-03-01T23:59:59&client_id=MTY2MnwxMzgzMzIwMTU4

// console.log("Great Work Team!");

// $.ajax({
//     url: "https://api.seatgeek.com/2/events?client_id=	NDMxMTUyMXwxNTE5Njg2MDU1Ljkx&client_secret=17b84706c152b783115f87b854b2bf4963fb5426ed37b6d41c51ce728715d710",
//     method: "GET"
// }).then(function (response) {
//     // displays response in debugger when we do our AJAX call.
//     console.log(response);
//     // setting the event to a variable and console logging the response.
//     var dateString = response.events[0].datetime_utc;
//     console.log(dateString);
//     // creating a variable for our date string
//     var momentObj = moment(dateString);
//     console.log(momentObj);
//     // moment is a library that is used to manipulate and change date and time
//     // creating a variable to formats the moment object to the date an time we want.
//     var momentString = momentObj.format('dddd, MMMM Do YYYY, h:mm:ss a');
//     console.log(momentString);
// });


$("#submitButton").on("click", function(event){
    var locate = $("#citySearch").val();
    console.log(locate);
    zomatoCITY();
    });
    
    
    function zomatoCITY(){
        var locate = $("#citySearch").val();
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/locations?query=" + locate,
            type: "GET",
            dataType: "json",
            headers: {"user-key": "f01cb7831e9ebde3e857af1190a5f819"}
        }).then(function (response){
            console.log(response);
            var cityNum = response.location_suggestions[0].city_id;
            $.ajax({
                url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityNum + "&entity_type=city",
                type: "GET",
                dataType: "json",
                headers: {"user-key": "f01cb7831e9ebde3e857af1190a5f819"}
        
            }).then(function (response2){
                var zomResult = response2.restaurants;
                for (i = 0; i < 10; i++){
                    console.log(zomResult[i]);
                    var zomName = zomResult[i].restaurant.name;
                    var zomAddress = zomResult[i].restaurant.location[0];
                    var zomCuisine = zomResult[i].restaurant.cuisines;
                    // example of how to put information on card
                    // var zomCard = $("<div>");
                    // zomCard.addClass("card horizontal");
                    // zomCard.text(zomName);
                    // $("#zomatoCol").append(zomCard)
                }
            });
    
        });
    }
    

