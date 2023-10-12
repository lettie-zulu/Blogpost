const express = require('express');
const expressSession = require('express-session');
const ejs = require('ejs');
const mongoose = require('mongoose');
// allowing files to be uploaded and handled
const fileUpload = require('express-fileupload');
// create a new Express application
const app = new express();

// Controllers
const homeController = require('./controllers/home');
const newPostController = require('./controllers/newPost');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');

//Middleware
const validateMiddleware = require('./middleware/validateMiddleware');
const customMiddleware = (req, res, next) => {
    console.log("Custom middleware called");
    next();
}
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticstedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

// allows the program to read static files from the public folder
app.use(express.static('public'));
// the next 2 functions enable the app to handle POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(customMiddleware);
app.use(expressSession({
    secret: 'keyboard cat'
}));
global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
})

// With app.set('view engine','ejs'), we tell Express to use EJS as our templating engine, 
// that any file ending in .ejs should be rendered with the EJS package.
app.set('view engine', 'ejs');
mongoose.connect('mongodb://127.0.0.1/my_database', {useNewUrlParser: true});

app.get('/', homeController);

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/posts/new', authMiddleware, newPostController); // renders the create page
app.use('/posts/store', validateMiddleware); // validate user input for new post
app.post('/posts/store', authMiddleware, storePostController); // saves the post to the database
app.get('/post/:id', getPostController); // renders the post page

app.get('/auth/register', redirectIfAuthenticstedMiddleware, newUserController); // renders the register page
// (validate user input)
app.post('/users/register', redirectIfAuthenticstedMiddleware, storeUserController); // saves the user to the database

app.get('/auth/login', redirectIfAuthenticstedMiddleware, loginController); // renders the login page
// (validate user input)
app.post('/users/login', redirectIfAuthenticstedMiddleware, loginUserController); // logs the user in to their account

app.get('/auth/logout', logoutController); // logs out the current user

app.use((req, res) => res.render('notfound')); // renders the error 404 page

app.listen(4000, () => {
    console.log("App listening on port 4000");
});