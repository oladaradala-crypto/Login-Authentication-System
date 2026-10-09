const username = document.getElementById("username");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const message = document.getElementById("message");


// Login Button
loginBtn.addEventListener("click", () => {

    // Correct login details
    const correctUsername = "Jemilat";
    const correctPassword = "Cyber123!";

    if (
        username.value === correctUsername &&
        password.value === correctPassword
    ) {

        message.textContent =
            "Login Successful! Welcome, " + username.value + ".";

        message.style.color = "green";

    } else {

        message.textContent =
            "Invalid username or password.";

        message.style.color = "red";

    }

});


// Logout Button
logoutBtn.addEventListener("click", () => {

    username.value = "";
    password.value = "";

    message.textContent =
        "You have successfully logged out.";

    message.style.color = "blue";

});