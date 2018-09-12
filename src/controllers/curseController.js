const Curse = require('../models/curse.js');

exports.search = (req, res) => {    
    var tags = req.body.tags;
    var title = req.body.title;
    var sortKey = req.body.sortKey;
    var sortOrder = req.body.sortOrder;
    //title, price ou createdAt
    Curse
    .find({ $or: [
        { "title": title },
        { "tags": tags}
    ]})
    .sort({ sortKey: sortOrder })
    .then(curses => {
        res.status(200).send(curses);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};

exports.create = (req, res) => {
    const curse = new Curse({
        title: req.body.title, 
        price: req.body.price,
        summary: req.body.summary,
        tags: req.body.tags,
        thumbnail: req.body.thumbnail,
        author: req.body.author
    });

    curse.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};