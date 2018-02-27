// function googleAPI() {
//     var googleKey = "AIzaSyDE1RQqUOULNf5I-WfoQf5njUbrl9rLRQQ";
//     var googleURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters/" + keyword+ googleKey;

//     $.ajax({
//         url: googleURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//     }
//     )}

//     googleAPI();

// f01cb7831e9ebde3e857af1190a5f819

// var location = "Diamond Bar";

$("#submitt").on("click", function(event){
var locate = $("#locationz").val();
console.log(locate);
zomatoCITY();
// zomatoSEARCH();
});


function zomatoCITY(){
    var locate = $("#locationz").val();
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
            console.log(response2)
        });

    });
}

// function zomatoSEARCH(){
//     $.ajax({
//         url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityNum + "&entity_type=city",
//         type: "GET",
//         dataType: "json",
//         headers: {"user-key": "f01cb7831e9ebde3e857af1190a5f819"}

//     }).then(function (response2){
//         console.log(response2)
//     });
// }
