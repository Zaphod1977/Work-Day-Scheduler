$(document).ready(function () {



    // current day is displayed
    var date = new Date();
    $("#currentDay").text(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
    console.log(Date());



    // time blocks for standard hours
    $(".container").children().each(function () {

        if (parseInt($(this).attr("id").replace("t", "")) < date.getHours()) {
            $(this).addClass("past")
        }

        else if (parseInt($(this).attr("id").replace("t", "")) == date.getHours()) {
            $(this).addClass("present")
        }

        else { $(this).addClass("future") }
    })

    //  click event to enter text data to time-block div
    //  save that entered data w/json technique

    $('#sb9').click(function () {
        saveTasks9();
    });
    var saveTasks9 = function () {
        var nineValue = $("#nine").val();
        localStorage.setItem(this, JSON.stringify(nineValue));
    };

    $('#sb10').click(function () {
        saveTasks10();
    });
    var saveTasks10 = function () {
        var tenValue = $("#ten").val();
        localStorage.setItem(this, JSON.stringify(tenValue));
    };




});