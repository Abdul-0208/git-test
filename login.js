const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email);

   fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: email,
        password: password
    })
})
.then(response => response.json())
.then(data => {
    console.log("Backend response:", data);
})
.catch(error => {
    console.error("Request failed:", error);
});
});