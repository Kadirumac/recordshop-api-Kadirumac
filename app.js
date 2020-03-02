/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

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

/** EXPORT PATH */
module.exports = app;
