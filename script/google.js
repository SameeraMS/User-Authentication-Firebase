
const provider = new firebase.auth.GoogleAuthProvider();

// Function to handle Google Sign-In
function signInWithGoogle() {
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log("User signed in:", result.user);
            alert("Welcome, " + result.user.displayName + "!");
        })
        .catch((error) => {
            console.error("Error signing in with Google:", error);
            alert("Error!!");
        });
}


// Function to handle Google Sign-Up
function signUpWithGoogle() {
    auth.signInWithPopup(provider)
        .then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log("User Info:", user);
            alert(user.displayName + "Signed Up with Google Successfully!");

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;

            console.error("Error during Google Sign-Up/Sign-In:", error);
            alert("Error");
        });
}

