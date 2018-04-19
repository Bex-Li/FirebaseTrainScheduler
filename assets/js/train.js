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
    var nextTrain = 0;
    var tMinutesTilTrain = 0;    

// click listener on submit button
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

    getTimes(frequency, firstTrainTime);

    database.ref().push({
        destination: destination,
        frequency: frequency,
        firsttrain: firstTrainTime,
        trainName: trainName
    });
  // Clears all of the text-boxes
//   $("#employee-name-input").val("");
//   $("#role-input").val("");
//   $("#start-input").val("");
//   $("#rate-input").val("");
});

//add rows dynamically here for the current train scheduler 
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
    
    var destinationChild = childSnapshot.val().destination;
    console.log(destinationChild);

    var nameChild = childSnapshot.val().trainName;
    console.log(nameChild);

    var firstTrainChild = childSnapshot.val().firsttrain;
    console.log(firstTrainChild);

    var freqChild = childSnapshot.val().frequency;
    console.log(freqChild);
    
    getTimes(freqChild, firstTrainChild);

// where am i appending it  
$("#train-scheduler-table").append("<tr><td>" + nameChild + "</td><td>" 
+ destinationChild + "</td><td>" + freqChild + "</td><td>" + firstTrainChild + "</td><td>" + nextTrain + "</td></tr>")
})

function getTimes(freq, first_TrainTime) {
    var freqVar = freq;    
    var fttVar = first_TrainTime;
    var ftConverted = moment(fttVar, "hh:mm").subtract(1, "years"); 
    var currentTime = moment();
    var diffTime = moment().diff(moment(ftConverted), "minutes");
    var tRemainder = diffTime % freqVar;
    tMinutesTilTrain = freqVar - tRemainder;
    nextTrain = moment().add(tMinutesTilTrain, "minutes");
    var nextArrival = moment(nextTrain).format("hh:mm A");
    var minsAway = tMinutesTilTrain; 
    return nextTrain, tMinutesTilTrain;
}

// when you click submit we retrieve user entries
// capture data in click listener via the vars
// use vars to update firebase db

});