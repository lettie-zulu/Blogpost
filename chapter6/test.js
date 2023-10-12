"use strict";

const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
//mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });
mongoose.connect("mongodb://127.0.0.1:27017/my_database", {
  useNewUrlParser: true,
});

// BlogPost.create(
//   {
//     title: "The Mythbuster Guide to Saving Money on Energy Bills",
//     body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:",
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// BlogPost.create(
//   {
//     title: "The Fullstack Developer Guide to making Money",
//     body: "Practise:",
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// BlogPost.find({}, (error, blogpost) => {     //To select all documents in BlogPosts collection: pass an empty document as the query filter parameter to the first argument of the find method
//     console.log(error, blogpost)
// });

// BlogPost.find({      //The query filter parameter determines the select criteria. Thus, to find all documents in BlogPosts collection with a particular title for e.g. 'The Mythbuster’s Guide to Saving Money on Energy Bills'
//     title:/Money/
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// });

// BlogPost.find({         //find all documents in BlogPosts collection with ‘The’ in the title. we place the wildcard operator ‘/’ before and after The
//   title:/The/}, (error, blogspot) =>{
//   console.log(error,blogspot)
//   });

// var id = "65048517f0149f8228a9f901";      //To get single database documents, i.e. to retrieve single documents with unique id _id, we use the findById method

// BlogPost.findById(id, (error, blogpost) => {
//     console.log(error, blogpost)
// });

// ------UPDATING RECORDS---To update a record, we use findByIdAndUpdate where we provide id as the first argument and the fields/values to be updated in the second argument
//  BlogPost.findByIdAndUpdate(id, {
//     title: 'Updated Title'
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// });

//---DELETING A SINGLE RECORD --- To delete a record, we use the findByIdAndDelete where we provide id as the first argument.

// var id = "65047fd9e39cd39d30be19b5";
// BlogPost.findByIdAndDelete(id, (error, blogspot) =>{
// console.log(error,blogspot)
// });
