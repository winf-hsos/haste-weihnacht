 /* customer.js, beinhaltet login/logout */
 /* global firebasetools */

 /* global firebase*/

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCqHknms_mfUAZ7K2r2yCkmw2IWFJtPiQc",
  authDomain: "hasteweihnacht.firebaseapp.com",
  databaseURL: "https://hasteweihnacht.firebaseio.com",
  projectId: "hasteweihnacht",
  storageBucket: "hasteweihnacht.appspot.com",
  messagingSenderId: "485313714646"
 };

 firebasetools.initialize(config);

 /* global firebase */


 /* This change listener calls the loginChanged() function 
  * whenever a user logs in or out */
 firebase.auth().onAuthStateChanged(loginChanged);


 function validate() {
  var usermail = document.getElementById("userMail").value;
  var password = document.getElementById("userPassword").value;


  firebase.auth().signInWithEmailAndPassword(usermail, password).catch(handleError);


 }

 /* global $ location*/
 /* global getUser */



 function loginChanged(user) {

  console.log(user);

  if (user) {

   console.log("Welcome " + user.email + "!");
   console.log(user.uid);


   $('#loginModal').modal('hide');
   document.getElementById("logoutHidden").removeAttribute("hidden");
   document.getElementById("loginHidden").setAttribute("hidden", "true");
   document.getElementById("registerHidden").setAttribute("hidden", "true");
   document.getElementById("myAccountHidden").removeAttribute("hidden");
   document.getElementById("homeHidden").removeAttribute("hidden");
   document.querySelector('#navigationCol').removeAttribute("hidden");
 
  }
  else {
   document.getElementById("logoutHidden").setAttribute("hidden", "true");
   document.getElementById("loginHidden").removeAttribute("hidden");
   document.querySelector('#navigationCol').removeAttribute("hidden");
  }

 }

 function logout() {
  firebase.auth().signOut().then(function() {
   location.reload();
   window.location.href = '/index.html';
  }).catch(handleError);

 }

 function handleError(error) {
  if (error) {

   console.error(error.code + "wrong password or E-Mail" + error.message);
   document.getElementById("errorLogin").innerText = "Etwas ist schief gelaufen :(" + "\n" + "Bitte überprüfe deine Angaben und versuche es erneut!";
  }
 }

 // This function is called when the user clicks the register button
 function register() {

  // Get the values from the email and password input fields
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
   window.location.replace('/registration.html');
  }).catch(handleError);

 }

 function checkEmailVerified() {
  // Get the current user
  var user = firebase.auth().currentUser;
  // Get the info if user if verified
  var emailVerified = user.emailVerified;
  if (emailVerified === true) {
   window.location.replace("/seller.html");
   console.log(emailVerified);
  }
  else {
   sendVerificationEMail();
   window.location.replace("/emailverify.html");
  }
 }

 /* This function is called when a user
  * clicks on the send verification email button */
 function sendVerificationEMail() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(emailSuccess).catch(handleError);
 }

 function emailSuccess() {
  console.log("Verification mail was successfully sent.")
 }

 /* global firebase */
 // Get the current user
 var user = firebase.auth().currentUser;

 /*global firebasetools*/
 /* This function is called when the button is clicked */
 function createUser() {
  /* Get the values from the form elements */
  var vorname = document.getElementById("inputVname").value;
  var nachname = document.getElementById("inputNname").value;
  var position = document.getElementById("inputPosition").value;
  var plz = document.getElementById("inputPLZ").value;
  var adresse = document.getElementById("inputAdresse").value;
  var stadt = document.getElementById("inputStadt").value;
  var hausnummer = document.getElementById("inputHnummer").value;

  console.log(vorname);
  console.log(nachname);
  console.log(position);
  console.log(plz);
  console.log(adresse);
  console.log(stadt);
  console.log(hausnummer);
  console.log(currentUser.uid);


  /* Create the user object to send to the database */
  var userObj = {
   vorname: vorname,
   nachname: nachname,
   position: position,
   plz: plz,
   adresse: adresse,
   stadt: stadt,
   hausnummer: hausnummer,
   userId: currentUser.uid,

  };
  /* Print the user object to the console for debugging */
  console.dir(userObj);
  firebasetools.setUserProfile(userObj);
  document.getElementById("profileDataSaved").innerText = "Dein Profil wurde gespeichert.";
 }

 function upload() {
  var imageFile = document.getElementById("inputImage").files[0];
  firebasetools.uploadUserImage(imageFile, uploadFinished);
 }

 function uploadFinished(snapshotm, downloadURL) {
  console.log("File uploaded: " + downloadURL);
  var image = document.getElementById("showImage");
  image.removeAttribute("hidden");
  image.setAttribute("src", downloadURL);
 }

 function startSearch() {
  console.log("Searching...");

  var inputSearch = document.querySelector('#inputSearchProductName');
  console.log(inputSearch.value);

  // Open search results page and pass query text
  window.open("productoffer.html?q=" + inputSearch.value, "_self")
 }

 

 function goToProfile() {
  checkEmailVerified();
 }
 