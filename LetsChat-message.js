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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        Name: user_name,
        Message: msg,
        Like: 0
    });

    document.getElementById("msg").value = "";
}

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key; childData = childSnapshot.val(); 
            if(childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
           } 
        });  
    }); 
}

getData();