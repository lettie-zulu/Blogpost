
//Lesson 2
const express = require('express') // require express module
const app = express() // calls express function to start new Express app
const path = require('path') //path is another built in module in Node. It helps us get the specific path to the file
app.use(express.static('public')) //app.use is a special function to increase functionality with Express by adding a function to our application’s middleware stack
//express.static is a packaged shipped with Express that helps us serve static files
app.listen(3000, () => {
    console.log("App listening on port 3000")
})

// app.get('/',(req,res)=>{  //return a JSON respond back to the browser with res.json. lets us build APIs with Node
// res.json({
// name: 'Lettie Zulu'
// })
// })

// app.get('/about',(req,res)=>{ //define specific routes and its response our server gives
//     res.json({
//     name: 'Lettie Zulu'
//     })
//     })

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'index.html'))  //path.resolve helps us get the full absolute path. The path module ensures that things run smoothly regardless if the OS is Windows, Mac or Linux
//     })


app.get('/', (req, res) => { // called when request to / comes in
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/about', (req, res) => { // called when request to /about comes in
    res.sendFile(path.resolve(__dirname, 'about.html'))
})
app.get('/contact', (req, res) => { //called when request to /contact comes
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

