
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
        
    var submit;
    $(".horizontal").hide();



    function displayCards(){
    for (var i= 0; i< 10; i++){
        var repeat = $("<div>");
        repeat.addClass("class horizontal") 




    }
        var showName = $("<p>").text("Resturant Name: ")
        var showAddress = $("<p>").text("Address:  " )
        var showCuisine = $("<p>").text("Cuisine:  " )

        $("#result1").html(showName)
        $("#result2").html(showAddress);
        $("#result3").html(showCuisine)
    
    }

    $("#submitButton").on("click", function(){
        displayCards()
          
    $(".horizontal").show();
    })

    function moveResults(){
        $("#card-action").on("click", function(){

        })
    }

    