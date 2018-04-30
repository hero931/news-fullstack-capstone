/*Define variables objects and functions*/
$(document).ready(function () {
    getDataFromNyt();
});

//Open sidebar
$(document).on("click", "#sidebar-btn", function (event) {
    event.preventDefault();
    $('#sidebar').addClass('visible');
    $('#sidebar-btn').hide();
    $('#sidebar-close').show();
});

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
    getDataFromNyt();
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

//Search for a specific date
$(document).on("click", "#login_submit", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.result-page').show();

    /*var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d",
        'q': "news",
        'begin_date': "20180429"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });*/
});




//Results
function sportDataFromNyt() {
    const outcome = $('#sport-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/sports.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d"
    });
    $.ajax({
        url: url,
        method: 'GET',


    }).done(function (dataOutput) {
        console.log(dataOutput);
        outcome.html("");
        let count = 0;
        let buildTheHtmlOutput = "";
        /*for (let i = 0; i < dataOutput.results.length; i++) {
            let count = dataOutput.results[i];
            console.log(count);
            if (count < 6) {
                console.log(count);
            }
        }*/

        $.each(dataOutput.results, function (dataArrayKey, dataArrayValue) {
            count++;
            if (count <= 16) {
                console.log(count);
                buildTheHtmlOutput += '<div class="col">';
                buildTheHtmlOutput += '<p>' + dataArrayValue.title + '</p><hr>';
                buildTheHtmlOutput += "<a href='" + dataArrayValue.url + "' target='_blank'>";
                buildTheHtmlOutput += '<img src="' + dataArrayValue.multimedia[0].url + '">';
                buildTheHtmlOutput += "</a>";
                //buildTheHtmlOutput += '<p class="hidden">' + dataArrayValue.abstract + '</p>';
                buildTheHtmlOutput += '</div>';
            }

        });
        $(outcome).html(buildTheHtmlOutput);
        /*outcome.append(`<div class="col">
<h3>${results.title}</h3>
<hr>
<img src="${results.multimedia.url}">
<h4 class="hidden">{results.abstract}</h4>
</div>`);*/
    }).fail(function (err) {
        throw err;
    });
}
