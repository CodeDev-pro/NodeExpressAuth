const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { MONGO_DB_URL } = require('./utils/Constants');
const authRouter = require('./routes/auth_routes')

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => console.log(result.model))
.catch(err => console.log(err));

app.use(authRouter);

app.get("/", (request, response) => {
    response.send("Hello");
})

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Listening on port 3000");
})