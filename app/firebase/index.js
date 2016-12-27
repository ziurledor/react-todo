import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDLwkvR6VEZP00edFoPufeJAQ1JdoJJ7nE",
      authDomain: "ruiz-todo-app.firebaseapp.com",
      databaseURL: "https://ruiz-todo-app.firebaseio.com",
      storageBucket: "ruiz-todo-app.appspot.com",
      messagingSenderId: "1015997962321"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
