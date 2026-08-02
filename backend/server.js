const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Ali", age: 20 },
  { id: 2, name: "Ayesha", age: 22 }
];

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users",(req,res)=>{
    const nweUser =req.body;
    users.push(nweUser);

    res.status(201).json({
        message: "User added successfully",
        user: nweUser
    });
});
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.age = req.body.age;

    res.json({
        message: "User updated successfully",
        user
    });
});
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted successfully"
    });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
