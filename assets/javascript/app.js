 //Current Player object

 var currentPlayer = {
     name: "",
     wins: 0,
     losses: 0,
     weapon: "",
 }

 var opponentPlayer = {
    name: "",
    wins: 0,
    losses: 0,
    weapon: "",
}


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKkIO5_I2-GwJ3-4w9UH4Jsvi5jGFq9-0",
    authDomain: "rps-go.firebaseapp.com",
    databaseURL: "https://rps-go.firebaseio.com",
    projectId: "rps-go",
    storageBucket: "rps-go.appspot.com",
    messagingSenderId: "872766657792"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-user").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();
    
    newName = $("#name-input").val();
    newEmail = $("#email-input").val();
    newAge = $("#age-input").val();
    newComment = $("#comment-input").val();
    database.ref().set({
      name: newName,
      email: newEmail,
      age: newAge,
      comment: newComment,
    });
});

  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(dbObject) {
    console.log(dbObject.val());
    $("#name-display").text(dbObject.val().name);
    $("#email-display").text(dbObject.val().email);
    $("#age-display").text(dbObject.val().age);
    $("#comment-display").text(dbObject.val().comment);
    $("#name-input").val("");
    $("#email-input").val("");
    $("#age-input").val("");
    $("#comment-input").val("");
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });