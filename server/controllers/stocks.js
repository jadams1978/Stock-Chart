const Team  = require('../models/teams');
//Add Entry
exports.addTeam = function(req, res, next) {
    console.log('sweet potato');
    let team = new Team(req.body);
    team['userId'] = req.user.id;
    team.save();
    return res.json({
       data: 'rosebud'
    });
};
exports.addStock = function(req, res, next) {
    Team.update({
        _id: req.params.id
    }, {
        $push: {
            stocks: {
                'name': req.body.stockname,
                'description': req.body.stockdescription
            }
        }
    }, 
    function(err, doc) {
        if (err) {
            throw error
        }
    });
    res.end();
}