// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-MmsRX8YELXiEkPDrWlNXOxzHEHSwGQE",
    authDomain: "contactform-607ed.firebaseapp.com",
    databaseURL: "https://contactform-607ed.firebaseio.com",
    projectId: "contactform-607ed",
    storageBucket: "contactform-607ed.appspot.com",
    messagingSenderId: "190562365017"
  };
  firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit' , submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();
    
    //Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    //save messages
    saveMessage(name,email,subject,message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //clear form
    document.getElementById('contactForm').reset();

}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name,email,subject,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        subject : subject,
        message : message
    });
}