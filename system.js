const users = [
    { id: "armaan", password: "12345" },
    { id: "john", password: "hello123" },
    { id: "alice", password: "pass789" }
];

function login() {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const user = users.find(
        u => u.id === userId && u.password === password
    );

    if (user) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("mainBody").style.display = "block";
    } else {
        message.textContent = "Invalid ID or Password";
    }
}