var express = require("express");
var exphbs = require("express-handlebars");


var app = express();

var PORT = process.env.PORT || 8080;

// Serve static conteent for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);


// Start server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
