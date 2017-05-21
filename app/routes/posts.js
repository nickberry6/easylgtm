var posts = require('express').Router();
var Post = require('../models/post');

posts.route('/')
  .get(function(req, res) {
    Post.find(function(err, posts) {
        if (err)
            res.send(err);

        res.json(posts);
    });
  })
  .post(function(req, res) {
    var post = new Post();
    post.description = req.body.description;
    post.title = req.body.title;
    post.url = req.body.url;
    post.save(function(err) {
        if (err) {
          res.send(err);
        };

        res.json({ message: 'Post created!' });
    });
  });

posts.route('/:post_id')
  .get(function(req, res) {
      Post.findById(req.params.post_id, function(err, post) {
          if (err) {
            res.send(err);
          };
          res.json(post);
      });
  })
  .put(function(req, res) {
      Post.findById(req.params.post_id, function(err, post) {
          if (err) {
            res.send(err);
          };
          post.description = req.body.description;
          post.title = req.body.title;
          post.url = req.body.url;
          post.save(function(err) {
              if (err) {
                res.send(err);
              };

              res.json({ message: 'Post updated!' });
          });
      });
    })
    .delete(function(req, res) {
        Post.remove({
            _id: req.params.post_id
        }, function(err, post) {
            if (err) {
              res.send(err);
            };

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = posts;
