
$('#signUpBtn').on('click', () => {
    signup()
})

function signup(){

    let email = $('#email').val();
    let userName = $('#username').val();
    let password = $('#password').val();
    let rePassword = $('#repassword').val();

    if(email == "" || userName == "" || password == "" || rePassword == "") {
        alert("Please fill all the fields");
    } else {
        if (password != rePassword) {
            alert("re enter password not matched")
        } else {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    alert('Sign Up Successfully!');
                    window.location.href = "index.html"
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });
        }
    }
}


$('#loginbtn').on('click', function(event) {
    event.preventDefault();

    const email = $('#loginMain').val();
    const password = $('#loginPassword').val();
    if (email === '' || password === '') {
        alert('Please fill out both fields.');
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = './dashboard/index.html';
            alert('Sign In Successfully!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert("User Credentials do not match!");
        });
});