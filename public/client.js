/*Define variables objects and functions*/

//Open sidebar
$(document).on("click", "#sidebar-btn", function (event) {
    event.preventDefault();
    $('#sidebar').addClass('visible');
    $('#sidebar-btn').hide();
    $('#sidebar-close').show();
});

/*$(document).on("mouseout", "#sidebar ul li a", function(event){
    event.preventDefault();
    $('#sidebar').removeClass('visible');
});*/

//Close sidebar
$(document).on("click", "#sidebar-close", function (event) {
    event.preventDefault();
    $('#sidebar').removeClass('visible');
    $('#sidebar-btn').show();
});

//Sidebar menu
$(document).on("click", "#home", function (event) {
    event.preventDefault();
    location.reload();
});

$(document).on("click", "#sports", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.sport-page').show();
});

$(document).on("click", "#arts", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.art-page').show();
});

$(document).on("click", "#politics", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.politics-page').show();
});

$(document).on("click", "#business", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.business-page').show();
});

$(document).on("click", "#search", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.login-page').show();
});




//Results
function getDataFromNyt() {
    event.preventDefault();
    const outcome = $('#sport-section');
    var url = "https://api.nytimes.com/svc/topstories/v2/sports.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d"
    });
    $.ajax({
        url: url,
        method: 'GET',

    }).done(function (result) {
        console.log(result);
        outcome.html("");
        outcome.append(`<div class="row"><div class="col-4"><span class="title">${results.title}</span><br><br>
                      <img class="photo" src="${results.multimedia.url}">
                      <p class="text"><strong>${results.abstract}</strong></p></div></div>`);
    }).fail(function (err) {
        throw err;
    });
}
