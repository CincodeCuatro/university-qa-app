const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser'); 
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
//how to hide this from git?
const dbURI = 'mongodb+srv://michael:test1234@cluster0.dauir.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(process.env.PORT || 3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser); //the means it * applies to all get requests
//app.get('/', (req, res) => res.render('home'));
app.get('/ask', requireAuth, (req, res) => res.render('ask')); //for the page behind the login
app.get('/qa', requireAuth, (req, res) => res.render('qa'));
app.use(authRoutes);























// //cookies
// app.get('/set-cookies', (req,res)=> {

//   //res.setHeader('Set-Cookie', 'newUser=true');
//   res.cookie('newUser',false);
//   res.cookie('isEmployee',true, {maxAge: 1000 * 60 * 60 * 24, httoOnly: true});

//   res.send('you got the cookies');

// });

// app.get('/read-cookies', (req,res) => {

//   const cookies = req.cookies;
//   console.log(cookies.newUser);

//   res.json(cookies);

// });