const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())

const BlogPost = require('./models/BlogPost.js')

mongoose.connect('mongodb://127.0.0.1/my_database',
    { useNewUrlParser: true })

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    res.render('index', {
        blogposts
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})


app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })
})

app.post('/posts/store',async (req,res) =>{    
    let image = req.files.image
    image.mv(path.resolve(__dirname,'public/img',image.name),
        async (error)=>{
            await BlogPost.create({
                ...req.body,
                image:'/img/' + image.name
            })
            res.redirect('/')
        })

})

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

