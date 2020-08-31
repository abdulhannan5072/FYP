const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const config = require("./config/config").get(process.env.NODE_ENV);
const multer = require("multer");
const path = require("path");
const app = express();
const cors = require("cors");

//File upload 
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "file/doc" ||
    file.mimetype === "file/docx" ||
    file.mimetype === "file/pdf"||
    file.mimetype === "image/jpge"||
    file.mimetype === 'file/png'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
//Mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//File upload 
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("file")
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
  console.log(path.join(__dirname, "files"));
// import routes
const routes = require("./routes");

app.use("/", routes);

//deployment
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('/*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../client','build','index.html'));
  })
}



const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("SERVER is running on port " + port);
});



const io = require('./socket').init(server);


const socketManager = require('./controllers/socketManager');

io.on('connection', socketManager)
