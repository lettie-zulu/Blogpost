const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });

// create a BlogPost using the BlogPost Schema
BlogPost.create({
    title: "The Mythbuster Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I " +
        "went on ITV Tonight to dispense a masterclass in saving money on energy " +
        "bills. Energy-saving is one of my favourite money topics, because once " +
        "you get past the boring bullet-point lists, a whole new world of thrifty " +
        "nerdery opens up. You know those bullet-point lists. You start spotting " +
        "them everything at this time of year. They go like this:"
}).then(blogspot => {
    console.log("Successfully found \n" + blogspot);
}).catch(error => {
    console.log("Failed to find \n" + error);
});

// // finding a blogpost by title
// BlogPost.find({
//     title: "The Mythbuster Guide to Saving Money on Energy Bills"
// }).then(blogspot => {
//     console.log("Successfully found \n" + blogspot);
// }).catch(error => {
//     console.log("Failed to find \n" + error);
// });

// var id = "64fec1217b42855de4fd90b8";
// // finding a record by ID and updating it
// BlogPost.findByIdAndUpdate(id, {
//     title: "Updated title"
// }).then(blogspot => {
//     console.log("Successfully found and updated \n" + blogspot);
// }).catch(error => {
//     console.log("Failed to find and update \n" + error);
// });

// // finding a record bi ID and deleting it
// BlogPost.findByIdAndDelete(id)
//     .then(blogspot => {
//         console.log("Successfully found and deleted \n" + blogspot);
//     }).catch(error => {
//         console.log("Failed to find and delete \n" + error);
//     });'