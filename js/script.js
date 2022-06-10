$(document).ready(function () {

    // reload data after refresh
    $("#nine").append(localStorage.getItem("09"));
    $("#ten").append(localStorage.getItem("10"));
    $("#eleven").append(localStorage.getItem("11"));
    $("#twelve").append(localStorage.getItem("12"));
    $("#thirteen").append(localStorage.getItem("13"));
    $("#fourteen").append(localStorage.getItem("14"));
    $("#fifteen").append(localStorage.getItem("15"));
    $("#sixteen").append(localStorage.getItem("16"));
    $("#seventeen").append(localStorage.getItem("17"));
    // reload data end

    // current day is displayed
    var date = new Date();
    $("#currentDay").text(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());


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
    // end time block for standard hours

    // data entry points for the individual rows as per time
    // 9am
    $('#sb9').click(function () {
        saveTasks9();
    });
    var saveTasks9 = function () {
        var nineValue = $("#nine").val();
        localStorage.setItem("09", JSON.stringify(nineValue));
    };
    // 10am
    $('#sb10').click(function () {
        saveTasks10();
    });
    var saveTasks10 = function () {
        var tenValue = $("#ten").val();
        localStorage.setItem("10", JSON.stringify(tenValue));
    };
    // 11am
    $('#sb11').click(function () {
        saveTasks11();
    });
    var saveTasks11 = function () {
        var elevenValue = $("#eleven").val();
        localStorage.setItem("11", JSON.stringify(elevenValue));
    };
    // 12pm
    $('#sb12').click(function () {
        saveTasks12();
    });
    var saveTasks12 = function () {
        var twelveValue = $("#twelve").val();
        localStorage.setItem("12", JSON.stringify(twelveValue));
    };
    // 1pm
    $('#sb13').click(function () {
        saveTasks13();
    });
    var saveTasks13 = function () {
        var thirteenValue = $("#thirteen").val();
        localStorage.setItem("13", JSON.stringify(thirteenValue));
    };
    // 2pm
    $('#sb14').click(function () {
        saveTasks14();
    });
    var saveTasks14 = function () {
        var fourteenValue = $("#fourteen").val();
        localStorage.setItem("14", JSON.stringify(fourteenValue));
    };
    // 3pm
    $('#sb15').click(function () {
        saveTasks15();
    });
    var saveTasks15 = function () {
        var fifteenValue = $("#fifteen").val();
        localStorage.setItem("15", JSON.stringify(fifteenValue));
    };
    // 4pm
    $('#sb16').click(function () {
        saveTasks16();
    });
    var saveTasks16 = function () {
        var sixteenValue = $("#sixteen").val();
        localStorage.setItem("16", JSON.stringify(sixteenValue));
    };
    // 5pm
    $('#sb17').click(function () {
        saveTasks17();
    });
    var saveTasks17 = function () {
        var seventeenValue = $("#seventeen").val();
        localStorage.setItem("17", JSON.stringify(seventeenValue));
    };
        // end data entry points for the individual rows as per time
});