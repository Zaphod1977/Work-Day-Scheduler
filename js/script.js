$(document).ready(function () {


    // daily planner to create a schedule

    // current day is displayed
    var date = new Date();
    $("#currentDay").text(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
    console.log(Date());

    // time blocks for standard hours
    $(".container").children().each(function () {
        console.log(parseInt($(this).attr("id").replace("t" , "")))
        console.log(date.getHours());
        if (parseInt($(this).attr("id").replace("t" , "")) < date.getHours()) {
            $(this).addClass("past")
        }
        else if (parseInt($(this).attr("id").replace("t" , "")) == date.getHours()) {
            $(this).addClass("present")
        }
        else { $(this).addClass("future") }
    })

    // click function in time block

    // enter event

    // save button for entry

    // entry is saved in local storage

    // saved events persist





});