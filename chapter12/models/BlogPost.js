// Models are defined through the Schema interface. 
// Remember that a collection represents an entity in our app. 
// e.g. users, products, blogposts. 
// A schema represents how a collection looks like. 
// This means that each document in the collection would have the fields specified in the schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String
});

// We access the database via mongoose.model. 
// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural version of your model name. 
// In our case, because we use BlogPost, Mongoose will create the model for our BlogPosts collection,
// not BlogPost collection.
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;