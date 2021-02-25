  import firebase from 'firebase/app'
  import 'firebase/auth'

  const firebaseConfig= {
    apiKey: "AIzaSyDqNxZXBZc6qn9EhpBB5QdKUj09Mm29MpY",
    authDomain: "bukea-e205a.firebaseapp.com",
    projectId: "bukea-e205a",
    storageBucket: "bukea-e205a.appspot.com",
    messagingSenderId: "1005929973446",
    appId: "1:1005929973446:web:a196291e67751605a0f9c7"
  }

  const fire = firebase.initializeApp(firebaseConfig)
  const auth = fire.auth()

  export {auth}
 

  