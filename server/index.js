const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());


// // ROUTING

//create a new todo

app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING", 
            [description]
            );

            res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//pull all current todos

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo"
        )
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//pull specific todo

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id])
        res.json(todo.rows[0]);
        console.log(req.params);
    } catch (err) {
        console.error(err.message)
    }
});

//update a current todo

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
            );

        res.json("Todo updated!");
    } catch (err) {
        console.error(err.message)
        
    }
});


//delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1", 
            [id]
        );
        res.json("Todo deleted successfully!");
    } catch (err) {
        console.error(err.message)
    }
});


app.listen(5000, () => {
    console.log("server started @ port 5000")
});