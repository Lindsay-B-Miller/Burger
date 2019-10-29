// Making sure to wait to attach handlers until the DOM is fully loaded.
$(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var burger_name = $("#newBurger").val().trim();
        var burger = {
            burger: burger_name
        }
        // Sending POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(function () {
            console.log("Created a new burger");
            location.reload();
        })
    });


    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = 1;

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("Changed devoured state to", newDevoured);
                location.reload();
            }
        );
    });
})