const Stock  = require('../models/stocks');
const Quandl = require('quandl');

//Add Entry
exports.addStock = function(req, res, next) {
    console.log('sweet potato');
    console.log(req.body);
    let stock = new Stock(req.body);
    stock['userId'] = req.user.id;
    stock.save();
    quandl.dataset({
        source: "WIKI",
        table: req.body.stock
      }, {
        order: "asc",
        exclude_column_names: true,
        // Notice the YYYY-MM-DD format 
        start_date: "2017-11-30",
        end_date: "2017-12-28"
      }, function(err, response){
          if(err)
              throw err;
       
          console.log(response);
          return res.json({
              data: JSON.parse(response)
          });
      });
   
};

exports.findStocks = function(req, res, next) {
    console.log('findStocks');
    Stock.find().exec().then(results => {
        return res.json({
            data: results
        }); 
    })
    .catch(err => {throw err}) 
  
    
}



    

var quandl = new Quandl({
    auth_token: 'RHAbp4b2msadmufSJuzn',
    api_version: 3
  });
/*const Team  = require('../models/teams');
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
}*/