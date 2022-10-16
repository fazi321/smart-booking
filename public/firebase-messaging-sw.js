importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyAvVoJJfFGxx2f_JLIgLGZF0UTx9tZl2qk",
  authDomain: "testing-app-cd3e0.firebaseapp.com",
  databaseURL: "https://testing-app-cd3e0-default-rtdb.firebaseio.com",
  projectId: "testing-app-cd3e0",
  storageBucket: "testing-app-cd3e0.appspot.com",
  messagingSenderId: "761785791814",
  appId: "1:761785791814:web:50325d72f3c9ad71c72147",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log("bg ==>", payload);
});
