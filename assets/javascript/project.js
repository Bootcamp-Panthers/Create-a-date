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



function displayZomato(data) {
    for (var i = 0; i < 10; i++) {
        var repeat = $("<div>");
        repeat.addClass("card")
        repeat.addClass("horizontal")


        var cardStack = $("<div class = 'card-stacked'>")
        var cardContent = $("<div class = 'card-content'>")
        var showName = $("<p>").text("Resturant Name: " + data.restaurants[i].restaurant.name)
        var showAddress = $("<p>").text("Address:  " + data.restaurants[i].restaurant.location["address"])
        var showCuisine = $("<p>").text("Cuisine:  " + data.restaurants[i].restaurant.cuisines)
        var showConfirm = $("<div class = 'card-action'>")
        var confirm = $("<a href='#' class ='confirm'>Confirm</a>")
        var showImage = $("<div class = 'card-image'>")
        var image = $("<img src =" + data.restaurants[i].restaurant.featured_image + ">")


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

        $("#zomato").append(repeat);
    }
}



function displaySeat(data) {
    for (var i = 0; i < 10; i++) {
        var repeat = $("<div>");
        repeat.addClass("card")
        repeat.addClass("horizontal")



        // console.log(response.events[i].datetime_utc);
        // console.log(response.events[i].title);
        // console.log(response.events[i].url);
        // console.log(response.events[i].venue.address);
        var cardStack = $("<div class = 'card-stacked'>")
        var cardContent = $("<div class = 'card-content'>")
        var showName = $("<p>").text("Event Name: " + data.events[i].title)
        var showAddress = $("<p>").text("Address:  " + data.events[i].venue.address)
        var showCuisine = $("<p>").html("Link:  " +"<a>"+ data.events[i].url+"</a>")
        var showConfirm = $("<div class = 'card-action'>")
        var confirm = $("<a href='#' class ='confirm'>Confirm</a>")
        var showImage = $("<div class = 'card-image'>")
        var image = $("<img src =''>")


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

        $("#seatgeek").append(repeat);
    }
}

function moveResults() {
    $("#card-action").on("click", function () {

    })
}



function seatgeek() {
    var datetime = $("#datePick").val();
    var locate = $("#searchbar").val();
    $.ajax({
        url: "https://api.seatgeek.com/2/events?&datetime_local.gte="+ datetime +"T00:00:00&datetime_local.lte="+ datetime +"T23:59:59&venue.state=CA&venue.city="+locate+"&client_id=NDMxMTUyMXwxNTE5Njg2MDU1Ljkx&client_secret=17b84706c152b783115f87b854b2bf4963fb5426ed37b6d41c51ce728715d710",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        displaySeat(response);
    });
}

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


$("#submitButton").on("click", function (event) {
    zomatoCITY();
    seatgeek();
});


function zomatoCITY() {
    var locate = $("#searchbar").val();
    $.ajax({
        url: "https://developers.zomato.com/api/v2.1/locations?query=" + locate,
        type: "GET",
        dataType: "json",
        headers: { "user-key": "f01cb7831e9ebde3e857af1190a5f819" }
    }).then(function (response) {
        console.log(response);
        var cityNum = response.location_suggestions[0].city_id;
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityNum + "&entity_type=city",
            type: "GET",
            dataType: "json",
            headers: { "user-key": "f01cb7831e9ebde3e857af1190a5f819" }

        }).then(function (response) {
            console.log(response);
            displayZomato(response);
        });

    });
}
