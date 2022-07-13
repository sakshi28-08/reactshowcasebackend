const express = require("express");

// for initializing socket
const { createServer } = require("http");
const { Server } = require("socket.io");

const port = 5000;
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});

// recieving the event
io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.broadcast.emit('recmsg', data);

  });
});

// importing the userRouter
const UserRouter = require("./routers/UserRouter");
const ComponentRouter = require("./routers/ComponentRouter");
const UtilRouter = require("./routers/Util");
const cors = require("cors");

// middleware to convert client json data to
app.use(express.json());

// for allowing frontend request
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/user", UserRouter);

app.use("/component", ComponentRouter);
app.use("/util", UtilRouter);

app.get("/add", (req, res) => {
  res.send("request at index");
});

// route or endpoint
app.get("/", (req, res) => {
  res.send("response from express home");
});

app.get("/home", (req, res) => {
  res.send("another route for home");
});

// starting the server
httpServer.listen(port, () => {
  console.log("server started");
});
