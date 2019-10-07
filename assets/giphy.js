//VARIABLES ==================================================================

//Made the empty array called "topics" Need to put some strings related to the topic that interests me. So I did the API search already for Anthony Bourdain, now I need to think of whatever other topics. 
var topics = ["Queens Of The Stone Age", "The Raconteurs", "Kurt Vile", "Oasis", "Elliott Smith", "The Ramones", "Iggp Pop", "Sonic Youth"];

$("button").on("click", function () {

    var x = $(this).data("search");

    //To make sure we know which button is pushed, now each button in the HTML has a data-search tag. I do like the more dynamic way the for loop pushed the names to the <button>. Will try this for now and maybe revert once it becomes a little clearer.

    console.log(x);

    var queryURl = "https://api.giphy.com/v1/gifs/search?q=" + x + "&apikey=MrAcjsEMyvdkFPuwhAIhH1MxVGfHbjWi&limit=10&rating=g&";

    console.log("---------------");
    console.log(queryURl);

    $.ajax({
        url: queryURl,
        method: "GET"
    })

        .then(function (response) {
            console.log(response.data[0].images.downsized.url);

            for (var i = 0; i < response.data.length; i++) {
                $(".rating").prepend("<p> Rating: " + response.data[i].rating + "</p>");
                $(".band-image").prepend("<img src=' " + response.data[i].images.fixed_height_still.url + "'>'");

            }




        });

    //var queryParam = { "apiKey": "MrAcjsEMyvdkFPuwhAIhH1MxVGfHbjWi" };







    /* var imageURL = response.data.images;

    var rockBands = $("<img>");

    rockBands.attr("src", imageURL);
    rockBands.attr("alt", "QOTSA");

    $("images").append(rockBands); */




});



//$("#buttons-view").empty();


/* for (var i = 0; i < topics.length; i++) {

    var a = $("<button>");
    a.addClass("bands");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);

} */




    //I'll need to create an initialize function to clear the search field and to be able to create the new button to retrieve 10 objects with a rating of g.

    //function initializeGiphySearch() {


    //}

    //for loop buttons come up dynamically when I pulled them out of my initialize function, I've done this one before, but the buttons are working.



