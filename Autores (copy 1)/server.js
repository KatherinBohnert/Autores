require('./server/config/mongoose.config');

const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/routes/author.routes")(app);


function startServer() {
    const port = 8000;
    app.listen(port, () => {
      console.log(`Listening at Port ${port}`);
    });
  }