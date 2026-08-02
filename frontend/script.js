const btn = document.getElementById("btn");
const usersDiv = document.getElementById("users");

btn.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    usersDiv.innerHTML = "";

    users.forEach(user => {
        usersDiv.innerHTML += `
            <p>ID: ${user.id} | Name: ${user.name} | Age: ${user.age}</p>
        `;
    });
});
const addBtn = document.getElementById("addUser");

addBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: Date.now(),
            name: name,
            age: Number(age)
        })
    });

    const data = await response.json();

    alert(data.message);
});