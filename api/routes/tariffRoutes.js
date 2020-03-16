'use strict';
module.exports = function(app) {
    var tariffs = require('../controllers/tariffController');

    app.route('/plans')
        .get(tariffs.get_all_tariffs);

    app.route('/plans/basic')
        .get(tariffs.get_basic);

    app.route('/plans/packaged')
        .get(tariffs.get_packaged);
}