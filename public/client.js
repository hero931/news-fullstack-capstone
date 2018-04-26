/*Define variables objects and functions*/

//Sidebar
$(document).on("click", "#sidebar-btn", function(event){
    event.preventDefault();
    $('#sidebar').toggleClass('visible');
});

//Results
function getDataFromNyt(){
    event.preventDefault();
    const outcome = $('#sport-section');
    var url =                       "https://api.nytimes.com/svc/topstories/v2/sports.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d"
    });
    $.ajax({
        url: url,
        method: 'GET',

    }).done(function(result) {
        console.log(result);
        outcome.html("");
        outcome.append(`<div class="row"><div class="col-4"><span class="title">${results.title}</span><br><br>
                      <img class="photo" src="${results.multimedia.url}">
                      <p class="text"><strong>${results.abstract}</strong></p></div></div>`);
    }).fail(function(err) {
        throw err;
    });
}

