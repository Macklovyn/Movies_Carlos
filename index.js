const express = require('express');
const morgan = require('morgan');

require('./utils/mongoConnection');

const booksRouter = require('./routers/movie.router');
const userRouter = require('./routers/users.routers');

const app = express();
const port = 3003;

app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("Bienvenido a la Librería API");
});

app.use(express.json({limit: '50mb'}));
app.use('/books', booksRouter);
app.use('/books',userRouter);

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:" + port);
});



