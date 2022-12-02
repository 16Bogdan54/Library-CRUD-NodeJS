import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost", user: "root", password: "1111", database: "test"
})

app.get("/books", (req, res) => {
    const query = "SELECT * FROM books";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.post("/addbook", (req, res) => {
    const query = "INSERT INTO books (`title`, `desc`) VALUES (?)";
    const values = [req.body.title, req.body.desc]

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/books/:id", (req, res) => {
    const ID = req.params.id;
    const query = "DELETE FROM books WHERE id = ?";

    db.query(query, [ID], (err, data) => {
        if (err) return res.send(err);
        return res.json(data)
    })
})

app.get("/editbook/:id", (req, res) => {
    const ID = req.params.id;
    const query = "SELECT `title`, `desc` FROM books WHERE id = ?";

    db.query(query, [ID], (err, data) => {
        if(err) return res.send(err)
        return res.json(data)
    })
})

app.put("/editbook/:id", (req, res) => {
    const ID = req.params.id;
    const query = "UPDATE books SET `title`= ?, `desc`= ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc
    ]

    db.query(query, [...values, ID], (err, data) => {
        if (err) return res.send(err);
        return res.json(data)
    })
})

app.listen(3001, () => {
    console.log("server start")
})