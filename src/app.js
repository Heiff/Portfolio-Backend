const express = require('express');
require('dotenv').config();
const cors = require('cors');
const FileUpload = require('express-fileupload')
const sequelize = require('./database/sequelize');
const routers = require('./routers/All.Route');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.static(`${process.cwd()}/uploads`));
app.use(FileUpload());
app.use(routers)

const bootstrap = async (req, res) => {
    await sequelize.authenticate({
      logging: false,
    });
  
    await sequelize.sync({
      alter: true,
      logging: false,
    });
  
    app.listen(port, () => {
      console.log(port);
    });
  };
  
  bootstrap();