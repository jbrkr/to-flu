const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a quick todo



//create a full todo
app.post("/todos", async (req, res) => {
  try {
    const description = req.body.description;
    const due_date = req.body.due_date;
    const recipient = req.body.recipient;
    const newFullTodo = await pool.query(
      "INSERT INTO todo (description, due_date, recipient, complete) VALUES($1, $2, $3, $4) RETURNING *",
      [description, due_date, recipient, complete='f']
    );

    res.json(newFullTodo.rows[0]);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo WHERE complete = 'f'");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const {id}  = req.params;
    const description = req.body.description;
    const due_date = req.body.due_date;
    const recipient = req.body.recipient;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1, due_date = $2, recipient = $3 WHERE todo_id = $4",
      [description, due_date, recipient, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todosx/:id", async (req, res) => {
  try {
    const {id}  = req.params;
    const updateTodo = await pool.query(
      "UPDATE todo SET complete = 't' WHERE todo_id = $1",
      [id]
    );

    res.json("Todo was completed!");
  } catch (err) {
    console.error(err.message);
  }
});



//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//
// Research
//


app.post("/res", async (req, res) => {
  try {
    const topic = req.body.topic;
    const subj = req.body.subj;
    const project = req.body.project;
    const newResTopic = await pool.query(
      "INSERT INTO research (topic, subj, project, complete) VALUES($1, $2, $3, $4) RETURNING *",
      [topic, subj, project, complete='f']
    );

    res.json(newResTopic.rows[0]);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/res", async (req, res) => {
  try {
    const allTopics = await pool.query("SELECT * FROM research");
    res.json(allTopics.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/res/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const research = await pool.query("SELECT * FROM research WHERE topic_id = $1", [
      id
    ]);

    res.json(research.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});



app.listen(5000, () => {
  console.log("server has started on port 5000");
});