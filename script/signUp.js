
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
            $.ajax({
                url: "http://localhost:8083/api/v1/auth/register",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": userName
                }),
                success: (res) => {
                    console.log(res);
                    localStorage.setItem("token",res.data.token)
                    Swal.fire({
                        title: "signup successfully",
                        icon: "success"
                    });
                    window.location.href = "index.html"
                },
                error: (res) => {
                    console.error(res);
                    Swal.fire({
                        title: "Try again",
                        icon: "error"
                    });
                }
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

    const signInData = {
        email: email,
        password: password
    };
    $.ajax({
        url: 'http://localhost:8083/api/v1/auth/authenticate',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(signInData),
        success: function(response) {
            localStorage.setItem("token",response.data.token);
            window.location.href = './dashboard/index.html';
            Swal.fire({
                title: "Log in successfully",
                icon: "success"
            });
        },
        error: function(error) {
            Swal.fire({
                title: "Please check your credentials and try again",
                icon: "error"
            });
        }
    });
});