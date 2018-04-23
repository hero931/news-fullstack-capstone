/*Define variables objects and functions*/

//Sidebar
$(document).on("click", "#sidebar-btn", function(event){
    event.preventDefault();
    $('#sidebar').toggleClass('visible');
});

