const githubProvider = new firebase.auth.GithubAuthProvider();

// GitHub Sign-In
function signInWithGitHub() {
    auth.signInWithPopup(githubProvider)
        .then((result) => {
            console.log("User signed in with GitHub:", result.user);
            alert("Welcome " + result.user.displayName);
        })
        .catch((error) => {
            console.error("Error signing in with GitHub:", error);
            alert("Error");
        });
}

// GitHub Sign-Up
function signUpWithGitHub() {
    auth.signInWithPopup(githubProvider)
        .then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log("User Info:", user);
            alert(user.displayName + "Signed Up with Github Successfully!");

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;

            console.error("Error during GitHub Sign-Up/Sign-In:", error);
            alert("Error");
        });
}
