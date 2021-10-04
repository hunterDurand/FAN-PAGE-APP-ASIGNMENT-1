import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA6psvgZ9w1BFIbCsgWKgKHKhDFtKo9_zA",
    authDomain: "hunters-fan-page-app.firebaseapp.com",
    projectId: "hunters-fan-page-app",
    storageBucket: "hunters-fan-page-app.appspot.com",
    messagingSenderId: "556603612478",
    appId: "1:556603612478:web:ab286bfad8903aad54e06f"
  };

// export default Firebase;  
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
