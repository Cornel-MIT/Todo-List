const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./todos.db');

db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    priority TEXT
)`);

app.get('/todos', (req, res) => {
    db.all('SELECT * FROM todos', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

app.post('/todos', (req, res) => {
    const { description, priority } = req.body;
    db.run('INSERT INTO todos (description, priority) VALUES (?, ?)',
        [description, priority],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({
                    id: this.lastID,
                    description,
                    priority
                });
            }
        });
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { description, priority } = req.body;
    db.run('UPDATE todos SET description = ?, priority = ? WHERE id = ?',
        [description, priority, id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({
                    id: Number(id),
                    description,
                    priority
                });
            }
        });
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM todos WHERE id = ?',
        id,
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({ message: 'Todo deleted successfully' });
            }
        });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
