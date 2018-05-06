/*Define variables objects and functions*/
$(document).ready(function () {
    sportDataFromNyt();
});

$(document).ready(function () {
    artDataFromNyt();
});

$(document).ready(function () {
    politicsDataFromNyt();
});

$(document).ready(function () {
    businessDataFromNyt();
});

$(document).ready(function () {
    searchDataFromNyt();
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

//Home section
$(document).on("click", "#home", function (event) {
    event.preventDefault();
    location.reload();
});

$(document).on("click", ".logo-header", function (event) {
    event.preventDefault();
    location.reload();
});

//Sport section
$(document).on("click", "#sports", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.sport-page').show();
    sportDataFromNyt();
});

//Sport results
function sportDataFromNyt() {
    let outcome = $('#sport-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/sports.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d"
    });
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",
        type: "GET"

    }).done(function (dataOutput) {
        console.log(dataOutput);
        outcome.html("");
        let count = 0;
        let buildTheHtmlOutput = "";
        $.each(dataOutput.results, function (dataArrayKey, dataArrayValue) {
            count++;
            if (count <= 16) {
                //console.log(count);
                buildTheHtmlOutput += '<div class="col">';


                buildTheHtmlOutput += '<form class="addToSportList">';
                buildTheHtmlOutput += '<input type="hidden" class="addToSportListTitle" value="' + dataArrayValue.title + '">';
                buildTheHtmlOutput += '<input type="hidden" class="addToSportListUrl" value="' + dataArrayValue.url + '">';
                buildTheHtmlOutput += '<input type="hidden" class="addToSportListImage" value="' + dataArrayValue.multimedia[0].url + '">';
                if (dataArrayValue.multimedia.length != 0) {
                    buildTheHtmlOutput += '<input type="hidden" class="addToSportListImage" value="' + dataArrayValue.multimedia[0].url + '">';
                } else {
                    buildTheHtmlOutput += '<input type="hidden" class="addToSportListImage" value="images/no-image.png">';
                }
                buildTheHtmlOutput += '<button type="submit" class="addToSportListButton" value="">';
                buildTheHtmlOutput += '<i class="fa fa-plus-square-o" aria-hidden="true"></i>';
                buildTheHtmlOutput += '</button>';
                buildTheHtmlOutput += '</form>';


                buildTheHtmlOutput += '<p>' + dataArrayValue.title + '</p><hr>';
                buildTheHtmlOutput += "<a href='" + dataArrayValue.url + "' target='_blank'>";
                if (dataArrayValue.multimedia.length != 0) {
                    buildTheHtmlOutput += '<img src="' + dataArrayValue.multimedia[0].url + '">';
                } else {
                    buildTheHtmlOutput += '<img src="images/no-image.png">';
                }

                buildTheHtmlOutput += "</a>";
                //buildTheHtmlOutput += '<p class="hidden">' + dataArrayValue.abstract + '</p>';
                buildTheHtmlOutput += '</div>';
            }
        });
        $(outcome).html(buildTheHtmlOutput);
    }).fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//Add article to sport favorite list
$(document).on('submit', '.addToSportList', function (event) {
    event.preventDefault();
    var titleName = $(this).parent().find('.addToSportListTitle').val();
    var urlName = $(this).parent().find('.addToSportListUrl').val();
    var image = $(this).parent().find('.addToSportListImage').val();
    console.log(titleName, urlName);
    var sportObject = {
        'title': titleName,
        'url': urlName,
        'image': image
    };

    $.ajax({
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(sportObject),
            url: '/add-to-sport-list/',
        })
        .done(function (result) {
            console.log(result);
            populateSportList();
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
});



//Populate sport favorite list
function populateSportList() {
    let outcome = $('#result-section .col-favorite');

    $.ajax({
            type: 'GET',
            url: '/populate-sport-list/',
            dataType: 'json',
        })
        .done(function (dataOutput) {
            console.log(dataOutput);
            outcome.html("");
            let buildTheHtmlOutput = "";

            $.each(dataOutput.results, function (dataArrayKey, dataArrayValue) {

                buildTheHtmlOutput += '<div class="col">';
                buildTheHtmlOutput += '<h2>Sport Favorite List</h2>';
                buildTheHtmlOutput += '<p>Here you can see your saved favorite sport list</p><hr>';
                buildTheHtmlOutput += '<p>' + dataArrayValue.title + '</p><hr>';
                buildTheHtmlOutput += "<a href='" + dataArrayValue.web_url + "' target='_blank'>";
                if (dataArrayValue.multimedia.length != 0) {
                    buildTheHtmlOutput += '<img src="' + dataArrayValue.multimedia[0].url + '">';
                } else {
                    buildTheHtmlOutput += '<img src="images/no-image.png">';
                }

                buildTheHtmlOutput += "</a>";
                buildTheHtmlOutput += '</div>';

            });
            $(outcome).html(buildTheHtmlOutput);

        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}



//Arts section
$(document).on("click", "#arts", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.art-page').show();
});

//Arts results
function artDataFromNyt() {
    let outcome = $('#art-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/arts.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d"
    });
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",
        type: "GET"

    }).done(function (dataOutput) {
        console.log(dataOutput);
        outcome.html("");
        let count = 0;
        let buildTheHtmlOutput = "";
        $.each(dataOutput.results, function (dataArrayKey, dataArrayValue) {
            count++;
            if (count <= 16) {
                //console.log(count);
                buildTheHtmlOutput += '<div class="col">';
                buildTheHtmlOutput += '<p>' + dataArrayValue.title + '</p><hr>';
                buildTheHtmlOutput += "<a href='" + dataArrayValue.web_url + "' target='_blank'>";
                if (dataArrayValue.multimedia.length != 0) {
                    buildTheHtmlOutput += '<img src="' + dataArrayValue.multimedia[0].url + '">';
                } else {
                    buildTheHtmlOutput += '<img src="images/no-image.png">';
                }

                buildTheHtmlOutput += "</a>";
                //buildTheHtmlOutput += '<p class="hidden">' + dataArrayValue.abstract + '</p>';
                buildTheHtmlOutput += '</div>';
            }
        });
        $(outcome).html(buildTheHtmlOutput);
    }).fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//Politics section
$(document).on("click", "#politics", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.politics-page').show();
});

//Politics results
function politicsDataFromNyt() {
    let outcome = $('#politics-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/politics.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d"
    });
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",
        type: "GET"

    }).done(function (dataOutput) {
        //console.log(dataOutput);
        outcome.html("");
        let count = 0;
        let buildTheHtmlOutput = "";
        $.each(dataOutput.results, function (dataArrayKey, dataArrayValue) {
            count++;
            if (count <= 16) {
                //console.log(count);
                buildTheHtmlOutput += '<div class="col">';
                buildTheHtmlOutput += '<p>' + dataArrayValue.title + '</p><hr>';
                buildTheHtmlOutput += "<a href='" + dataArrayValue.web_url + "' target='_blank'>";
                if (dataArrayValue.multimedia.length != 0) {
                    buildTheHtmlOutput += '<img src="' + dataArrayValue.multimedia[0].url + '">';
                } else {
                    buildTheHtmlOutput += '<img src="images/no-image.png">';
                }

                buildTheHtmlOutput += "</a>";
                //buildTheHtmlOutput += '<p class="hidden">' + dataArrayValue.abstract + '</p>';
                buildTheHtmlOutput += '</div>';
            }
        });
        $(outcome).html(buildTheHtmlOutput);
    }).fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//Business section
$(document).on("click", "#business", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.business-page').show();
});

//Business results
function businessDataFromNyt() {
    let outcome = $('#business-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/business.json";
    url += '?' + $.param({
        'api-key': "1b45aab26c4f43869d611a4c1ff2c95d"
    });
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",
        type: "GET"

    }).done(function (dataOutput) {
        console.log(dataOutput);
        outcome.html("");
        let count = 0;
        let buildTheHtmlOutput = "";
        $.each(dataOutput.results, function (dataArrayKey, dataArrayValue) {
            count++;
            if (count <= 16) {
                //console.log(count);
                buildTheHtmlOutput += '<div class="col">';
                buildTheHtmlOutput += '<p>' + dataArrayValue.title + '</p><hr>';
                buildTheHtmlOutput += "<a href='" + dataArrayValue.web_url + "' target='_blank'>";
                if (dataArrayValue.multimedia.length != 0) {
                    buildTheHtmlOutput += '<img src="' + dataArrayValue.multimedia[0].url + '">';
                } else {
                    buildTheHtmlOutput += '<img src="images/no-image.png">';
                }

                buildTheHtmlOutput += "</a>";
                //buildTheHtmlOutput += '<p class="hidden">' + dataArrayValue.abstract + '</p>';
                buildTheHtmlOutput += '</div>';
            }
        });
        $(outcome).html(buildTheHtmlOutput);
    }).fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//Search section
$(document).on("click", "#search", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.login-page').show();
    $('#result-section').addClass('hide-me');
});

//Search for a specific date
function searchDataFromNyt() {
    $('#login_form').submit(function () {
        event.preventDefault();
        //var test = new Date($("#loginDate").val());
        var test = $("#loginDate").val();
        console.log(test);
        var repleacedDateString = test.replace(/-/gi, "");
        console.log(repleacedDateString);
        //        var day = test.getDay();
        //        var month = test.getMonth() + 1;
        //        var year = test.getFullYear();
        //        var testIt = year + " " + month + " " + day;

        const outcome = $('#result-section .col-container');
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "1b45aab26c4f43869d611a4c1ff2c95d",
            'q': "news",
            'end_date': repleacedDateString,
            'sort': "newest"
        });
        $.ajax({
            url: url,
            method: 'GET',
            dataType: "json",
            type: "GET"

        }).done(function (dataOutput) {
            console.log(dataOutput);
            outcome.html("");
            let count = 0;
            let buildTheHtmlOutput = "";
            $.each(dataOutput.response.docs, function (dataArrayKey, dataArrayValue) {
                count++;
                if (count <= 10) {
                    //console.log(count);
                    buildTheHtmlOutput += '<div class="col">';
                    buildTheHtmlOutput += '<p>' + dataArrayValue.snippet + '</p><hr>';
                    buildTheHtmlOutput += "<a href='" + dataArrayValue.web_url + "' target='_blank'>";

                    if (dataArrayValue.multimedia.length != 0) {
                        buildTheHtmlOutput += '<img src="http://www.nytimes.com/' + dataArrayValue.multimedia[0].url + '">';
                    } else {
                        buildTheHtmlOutput += '<img src="images/no-image.png">';
                    }

                    buildTheHtmlOutput += "</a>";
                    buildTheHtmlOutput += '</div>';
                }
            });
            $(outcome).html(buildTheHtmlOutput);
        }).fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
    });
}
