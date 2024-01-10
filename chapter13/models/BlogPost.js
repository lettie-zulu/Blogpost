const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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

// module.exports = async (req,res)=>{ 
//     const blogpost = await BlogPost.findById(req.params.id).populate('User');
//     console.log(blogpost)
//     res.render('post',{
//     blogpost
//     }); 
//    }