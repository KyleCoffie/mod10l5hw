document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    let user = {
        name: name,
        email: email,
        message: message
    };

    displayUser(user);
    document.getElementById("userForm").reset();
});

function displayUser(user) {
    let userList = document.getElementById("userList");
    let userElement = document.createElement("div");
    userElement.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Message:</strong> ${user.message}</p>
    `;
    userList.appendChild(userElement);
}
