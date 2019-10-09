//VARIABLES ==================================================================

//Made the empty array called "topics" Need to put some strings related to the topic that interests me. So I did the API search already for Anthony Bourdain, now I need to think of whatever other topics. 
var topics = ["Queens Of The Stone Age", "The Raconteurs", "Kurt Vile", "Oasis", "Elliott Smith", "The Ramones", "Iggy Pop", "Sonic Youth", "Metallica", "Lindsey Buckingham"];

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



            for (var i = 0; i < response.data.length; i++) {
                $(".rating").prepend("<p> Rating: " + response.data[i].rating + "</p>");

                //Original test to display API call for band-image ID.
                //$("#band-image").prepend("<img src=' " + response.data[i].images.fixed_height_still.url + "'>'");


                //Good way to shorten the amount of typing since I will be using response.data over and over.
                var bandResults = response.data;

                var imageState = $("<img>");
                imageState.attr("src", bandResults[i].images.fixed_height_still.url);
                imageState.attr("data-still", bandResults[i].images.fixed_height_still.url);
                imageState.attr("data-animate", bandResults[i].images.downsized.url);
                imageState.attr("data-state", "still");
                imageState.addClass("gif");
                imageState.addClass("img-fluid");
                imageState.attr("alt", "Responsive image");
                imageState.addClass("rounded");
                //Tried to add audio to the gif, created a data-music tag attribute for <img>, but no go, got now. Addendum, so did a search and said no way to add audio to gif, would need to create video for that.


                //I wanted to still use my .band-image class, but changed it to an ID instead since it's just referencing one element, <img>.
                $("#band-image").prepend(imageState);

                console.log("-----------------------");
                console.log("Still image src: " + bandResults[i].images.fixed_height_still.url);
                console.log("Still image data-still: " + bandResults[i].images.fixed_height_still.url);
                console.log("Animated image, data-animate: " + bandResults[i].images.downsized.url);









            }




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

        console.log("Buttons for bands: " + a);
    }


}

//Adding new buttons when add band button is clicked renderButtons(); function called to render <button>.
$("#add-band").on("click", function (event) {
    console.log("My Test: " + event);

    event.preventDefault();

    var topic = $("#band-input").val().trim();

    topics.push(topic);

    renderButtons();
    console.log("------------------");
    console.log("Band name added to button: " + topic);
});

//Jon TA checked this click function again, works with .gif class selector. Had it that way originally, might no have reloaded the page when I tried. Used document as the selector, worked. But reverted back to .gif after testing good this time. Another addendum to this comment, I was testing my repo link when changing back to .gif, double checked, this class selector .gif is not working, rolling back to document for now. Another addendum, changed document selector to #band-image ID, left .gif class, now works. Placement of selectors and knowing the click is on the image ID, band-image.
$("#band-image").on("click", ".gif", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    console.log("data-animate");
    console.log("data-still");
});




renderButtons();








