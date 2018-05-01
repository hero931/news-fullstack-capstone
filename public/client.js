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
    }).fail(function (err) {
        throw err;
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
    const outcome = $('#art-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/arts.json";
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
    }).fail(function (err) {
        throw err;
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
    const outcome = $('#politics-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/politics.json";
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
    }).fail(function (err) {
        throw err;
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
    const outcome = $('#business-section .col-container');
    var url = "https://api.nytimes.com/svc/topstories/v2/business.json";
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
    }).fail(function (err) {
        throw err;
    });
}

//Search section
$(document).on("click", "#search", function (event) {
    event.preventDefault();
    $('.hide-me').hide();
    $('.login-page').show();
});

//Search for a specific date
function searchDataFromNyt() {
    $('#login_form').submit(function () {
        event.preventDefault();

        let month_name = new Array("January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December");
        let date = new Date();
        let curr_month = date.getMonth();
        let curr_year = date.getFullYear();
        let query = $("#loginDate");
        query.value = curr_year + "," + month_name[curr_month];

        const outcome = $('#result-section .col-container');
        var url = "https://api.nytimes.com/svc/topstories/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "1b45aab26c4f43869d611a4c1ff2c95d",
            'q': "news",
            'begin_date': 'query'
        });
        $.ajax({
            url: url,
            method: 'GET',

        }).done(function (dataOutput) {
            console.log(dataOutput);
            outcome.html("");
            let count = 0;
            let buildTheHtmlOutput = "";
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
        }).fail(function (err) {
            throw err;
        });
    });
}
