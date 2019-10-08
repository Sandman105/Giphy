//VARIABLES ==================================================================

//Made the empty array called "topics" Need to put some strings related to the topic that interests me. So I did the API search already for Anthony Bourdain, now I need to think of whatever other topics. 
var topics = ["Queens Of The Stone Age", "The Raconteurs", "Kurt Vile", "Oasis", "Elliott Smith", "The Ramones", "Iggy Pop", "Sonic Youth"];

$(document).on("click", ".bands", function () {

    var x = $(this).data("name");
    console.log(this);

    //To make sure we know which button is pushed, now each button in the HTML has a data-search tag. I do like the more dynamic way the for loop pushed the names to the <button>. Will try this for now and maybe revert once it becomes a little clearer.

    console.log("Band name: " + x);

    //Need to narrow the query request, so maybe need to put music+bands for the search query, so q=music+bands.
    var queryURl = "https://api.giphy.com/v1/gifs/search?q=" + x + "&apikey=MrAcjsEMyvdkFPuwhAIhH1MxVGfHbjWi&limit=10&rating=g&";

    console.log("---------------");
    console.log(queryURl);

    $.ajax({
        url: queryURl,
        method: "GET"
    })

        .then(function (response) {
            console.log(response.data[0].images.downsized.url);

            //TODO: Thinking maybe the click function for the gif will go here, so it wraps around the for loop.
            //$(".gif").on("click", function() {

            for (var i = 0; i < response.data.length; i++) {
                $(".rating").prepend("<p> Rating: " + response.data[i].rating + "</p>");
                //$("#band-image").prepend("<img src=' " + response.data[i].images.fixed_height_still.url + "'>'");


                //Good way to shorten the amount of typing since I will be using response.data over and over.
                var bandResults = response.data;

                var imageState = $("<img>");
                imageState.attr("src", bandResults[i].images.fixed_height_still.url);
                imageState.attr("data-still", bandResults[i].images.fixed_height_still.url);
                imageState.attr("data-animate", bandResults[i].images.downsized.url);
                imageState.attr("data-state", "still");
                imageState.addClass("gif");


                /* $("src").prepend(bandResults[i].fixed_height_still.url);
                $("data-still").prepend(bandResults[i].images.fixed_height_still.url);
                $("data-animate").prepend(bandResults[i].downsized.url); */

                //I want to still use my .band-image class 
                $("#band-image").prepend(imageState);





                //TODO: Still trying to figure out the animation part, fairly certain I will need to create some new tags, like the special attribute one used already, data-.


                /* var imageState = $(this).attr("data-state");
                imageState.addClass("gif");
                imageState.attr("data-animate", response.data[i].images.downsized.url); */
                //data-still, animate 
            }

            //});


        });




});

//Adding new buttons dynamically to the page, new buttons are adding now, TODO: but now just need to link new buttons to AJAX request. Ok now the buttons are working with the AJAX call, my class "bands" was not in the click function, document. And my variable x did not have the correct attribute reference of data-name. 
function renderButtons() {

    $("#buttons-view").empty();


    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
        a.addClass("bands");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);

    }

}

$("#add-band").on("click", function (event) {
    console.log("My Test: " + event);

    event.preventDefault();

    var topic = $("#band-input").val().trim();

    topics.push(topic);

    renderButtons();

});

$(document).on("click", ".gif", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});




renderButtons();


    //function initializeGiphySearch() {


    //}





