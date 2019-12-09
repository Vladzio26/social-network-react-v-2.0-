import firebase from 'firebase';
import 'firebase/storage';
const config={
    apiKey: "AIzaSyAnClSLoQLouw7qs5uOJS8YcxY1EClhLi8",
    authDomain: "chat-for-react.firebaseapp.com",
    databaseURL: "https://chat-for-react.firebaseio.com",
    projectId: "chat-for-react",
    storageBucket: "chat-for-react.appspot.com",
    messagingSenderId: "806936981186",
    appId: "1:806936981186:web:d2ddde8d04f08cfb0bd55b",
    measurementId: "G-5MBZ2LVV2N"
}
const Firebase = firebase.initializeApp(config);

 const storage = firebase.storage();

 const database = firebase.database()

export {
    database,storage, firebase as default
}


