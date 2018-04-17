$(document).ready(function () {
    console.log("ready!");
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyANhsTqtXCqhrL8ddYAF4ub8SymJRTsgRg",
        authDomain: "week7firebaseproject.firebaseapp.com",
        databaseURL: "https://week7firebaseproject.firebaseio.com",
        projectId: "week7firebaseproject",
        storageBucket: "week7firebaseproject.appspot.com",
        messagingSenderId: "332302097897"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    var trainName = 0;
    var trainDestination = 0;
    var firstTrainTime = 0;
    var frequency = 0;


// click listner on submit button
$( "#submit" ).on( "click", function(event) {
    event.preventDefault();
    console.log("test");
    var trainName = $("#trainName").val().trim();
    console.log(trainName);
    var destination = $("#destination").val().trim();
    console.log(destination);
    var firstTrainTime = $("#firstTrainTime").val().trim();
    console.log(firstTrainTime);
    var frequency = $("#frequency").val().trim();
    console.log(frequency);
  });

// when you click submit we retrieve user entries
// capture data in click listener via the vars
// use vars to update firebase db





});