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

    // var div = document.getElementById('newText');
    // var content = document.createTextNode("<YOUR_CONTENT>");
    // newText.appendChild(content);

    // $( "#newText" ).append( "<p>Test</p>" );

    //Creates HTML elements for our planner's time rows

    // Variables for each 'create element'

    var saveTasks = function () {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      };
      






});