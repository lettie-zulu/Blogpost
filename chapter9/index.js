const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');

const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const validateMiddleware = require("./middleware/validateMiddleware");

const app = new express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded());

app.use('/posts/store',validateMiddleware);

const BlogPost = require('./models/BlogPost.js');

mongoose.connect('mongodb://127.0.0.1/my_database',
    { useNewUrlParser: true });

app.get('/posts/new',newPostController);
app.get('/',homeController);
app.get('/post/:id',getPostController);
app.post('/posts/store', storePostController);

app.listen(4000, () => {
    console.log('App listening on port 4000')
});