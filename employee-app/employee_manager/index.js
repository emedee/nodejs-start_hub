// Import express
let express = require('express')
// Initialize the app
let app = express();
let cors = require('cors')
app.use(cors())
// Configure bodyparser to handle post requests
// Import Body parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Import routes
let apiRoutes = require("./api-routes.js")
// Use Api routes in the App
app.use('/api', apiRoutes)
// Import Mongoose
let mongoose = require('mongoose');
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and nodemon'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});