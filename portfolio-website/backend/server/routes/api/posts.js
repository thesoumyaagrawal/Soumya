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
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
    // Add logic to delete a post with the specified ID from the database here
    // You can access the post ID using req.params.id
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://soumya:soumya@cluster0.abraxr5.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('impressions').collection('posts');
}

module.exports = router;
