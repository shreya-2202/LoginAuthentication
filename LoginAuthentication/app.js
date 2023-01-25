const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function timeFunction() {
    setTimeout(function () {
        loginErrorMsg.style.opacity = 0;
    }, 2000);
}


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.uname.value;
    const password = loginForm.psw.value;
    console.log(username, password)

    if (username === "demo@gmail.com" && password === "demo123") {    
        alert("You have Successfully Logged In!!");       
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
        timeFunction();
       
    }
    
});