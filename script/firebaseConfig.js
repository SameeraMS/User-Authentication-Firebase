// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC7qMO487IylOoJlOIWIdtPTdEKqmk0Xs",
    authDomain: "config-with-github.firebaseapp.com",
    projectId: "config-with-github",
    storageBucket: "config-with-github.appspot.com",
    messagingSenderId: "979185474592",
    appId: "1:979185474592:web:3650fa7330bf1fe60cb045"
};


//initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

