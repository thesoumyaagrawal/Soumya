const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
    console.log("api request called");
    const posts = await loadPostsCollection();
    await posts.insertOne({
        name: req.body.name,
        profession: req.body.profession,
        comment: req.body.comment,
        gender: req.body.gender,
        createdAt: new Date()
    });
    console.log(req.body);
    console.log("data inserted successfully");
    res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
});

async function loadPostsCollection() {
    try {
        const client = await mongodb.MongoClient.connect("mongodb+srv://iamsoumyaagrawal:localhostsample@cluster0.qwkvrf0.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true
        });
        return client.db('impressions').collection('posts');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; // Rethrow the error to be handled by the caller
    }
}
module.exports = router;
