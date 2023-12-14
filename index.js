const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const books = [];
//middleware plugin
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.end(`Welcome to Bookify`);
});

app.get("/books", (req, res) => {
  return res.json({ books });
});

app.get("/books/:bookId", (req, res) => {
  const id = req.params.bookId;
  const book = books.find((e) => e.id === Number(id));
  return res.json({ book });
});

app.post("/book", function (req, res) {
  const bookFromClient = req.body;
  books.push(bookFromClient);
  res.json({ status: "Success" });
});

app.delete("/book", (req, res) => {
  const bookIdToDelete = req.params.bookId;
  books = books.filter((e) => e.id !== Number(bookIdToDelete));
  return res.json({ status: "Deleted" });
});
console.log("Hello world");
app.listen(4000, () => console.log("PORT : 4000"));
