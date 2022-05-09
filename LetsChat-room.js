// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARv3v6FtZ38K6EEVwJtwE2rCZELMIOmAk",
  authDomain: "lets-chat-ee7d6.firebaseapp.com",
  databaseURL: "https://lets-chat-ee7d6-default-rtdb.firebaseio.com",
  projectId: "lets-chat-ee7d6",
  storageBucket: "lets-chat-ee7d6.appspot.com",
  messagingSenderId: "471038277230",
  appId: "1:471038277230:web:91d1f302ef348a110b587f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").InnerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({Purpose : "Adding room name"});
  localStorage.setItem("room_name", room_name);
  window.location = "LetsChat-message.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names); row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "</div><hr>"; 
  document.getElementById("output").innerHTML += row;
  });
  });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "LetsChat-message.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "LetsChat-login.html";
}