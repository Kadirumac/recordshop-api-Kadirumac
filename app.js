/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const recordRouter = require('./routes/record')

/** INIT */
const app = express();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
// Set some defaults
// db.defaults({ posts: [], user: {} })
//   .write()
 
// Add a post
//db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write()
 
// Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//   .write()

/** LOGGING */
app.use(logger('dev'));

require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//mongoDb connection
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Connected to DB!')  
  );

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));

/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/records', recordRouter);


/** EXPORT PATH */
module.exports = app;
