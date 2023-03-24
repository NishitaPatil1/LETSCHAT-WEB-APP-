var firebaseConfig = {
      apiKey: "AIzaSyD3lRN59-Jsrzh6EX7MXTs3DuCoNNG3qQU",
      authDomain: "kwitter-b85d1.firebaseapp.com",
      databaseURL: "https://kwitter-b85d1-default-rtdb.firebaseio.com",
      projectId: "kwitter-b85d1",
      storageBucket: "kwitter-b85d1.appspot.com",
      messagingSenderId: "249378140667",
      appId: "1:249378140667:web:12072e24afd515a7c61b5e"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

    function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose:"adding user"
      })
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
