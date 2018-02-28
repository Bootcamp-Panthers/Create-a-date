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
    