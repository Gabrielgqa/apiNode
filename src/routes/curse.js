module.exports = (app) => {
    const curse = require('../controllers/curseController.js');

    app.post('/curse/search', curse.search);
    app.post('/curse', curse.create);
}