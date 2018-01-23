
        $(function () {

            // when an "eat" button is clicked, send a put request to update the database
            $(".eat").on("click", function (event) {

                event.preventDefault();

                var id = $(this).val();

                $.ajax({
                    url: `/eat/${id}`,
                    method: "PUT"
                }).done(function (response) {
                    console.log(response);
                    location.reload();
                });
            });

            // when a "make" button is clicked, send a put request to update the database
            $(".make").on("click", function (event) {

                event.preventDefault();

                var id = $(this).val();

                $.ajax({
                    url: `/make/${id}`,
                    method: "PUT"
                }).done(function (response) {
                    console.log(response);
                    location.reload();
                });
            });

            // when the new burger button is clicked, send a post request to enter a new burger in the database
            $("#submit").on("click", function (event) {

                event.preventDefault();

                var data = {
                    burger_name: $("#new-name").val()
                };

                $.ajax({
                    url: "/api/new",
                    method: "POST",
                    data: data
                }).done(function (response) {
                    console.log(response);
                    location.reload();
                });
            });

            // when a "delete" button is clicked, send a delete request to remove the burger from the database by id
            $(".delete").on("click", function (event) {

                event.preventDefault();

                var id = $(this).val();

                $.ajax({
                    url: `/remove/${id}`,
                    method: "DELETE"
                }).then(function (response) {
                    console.log(response);
                    location.reload();
                });
            });

            $("#toggle").on("click", function (event) {
                event.preventDefault();
                var state = $("#dir").attr("data");

                if (state === "show") {
                    $("#dir").attr("data", "hide");
                    $("#dir").attr("style", "display:none");
                } else {
                    $("#dir").attr("data", "show");
                    $("#dir").attr("style", "display:inline");
                }

            })
        });