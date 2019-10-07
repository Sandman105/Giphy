//VARIABLES ==================================================================

//Made the empty array called "topics" Need to put some strings related to the topic that interests me. So I did the API search already for Anthony Bourdain, now I need to think of whatever other topics. 
var topics = ["Queens Of The Stone Age", "The Raconteurs", "Kurt Vile and The Violators", "The Dead Weather", "The Kills", "Eagles Of Death Metal", "Iggp Pop", "Anthony Bourdain"];

//$("#button-view").on("click", function () {

//var queryParam = { "apiKey": "MrAcjsEMyvdkFPuwhAIhH1MxVGfHbjWi" };
var queryURl = "https://api.giphy.com/v1/gifs/search?q=queens+of+the+stone+age&limit=10&rating=g&apikey=MrAcjsEMyvdkFPuwhAIhH1MxVGfHbjWi";


$.ajax({
    url: queryURl,
    method: "GET"
})

    .then(function (response) {
        console.log(response);

        var imageURL = response.data.images;

        var rockBands = $("<img>");

        rockBands.attr("src", imageURL);
        rockBands.attr("alt", "QOTSA");

        $("images").append(rockBands);




    });



    //$("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {

    var a = $("<button>");
    a.addClass("bands");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);

    }




    //I'll need to create an initialize function to clear the search field and to be able to create the new button to retrieve 10 objects with a rating of g.

    //function initializeGiphySearch() {


    //}

    //for loop buttons come up dynamically when I pulled them out of my initialize function, I've done this one before, but the buttons are working.


//});
