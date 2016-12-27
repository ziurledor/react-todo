import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDLwkvR6VEZP00edFoPufeJAQ1JdoJJ7nE",
    authDomain: "ruiz-todo-app.firebaseapp.com",
    databaseURL: "https://ruiz-todo-app.firebaseio.com",
    storageBucket: "ruiz-todo-app.appspot.com",
    messagingSenderId: "1015997962321"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Rodel',
    age: 60
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
