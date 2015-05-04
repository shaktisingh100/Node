(function (homeController) {
    var request = require('request');
 

  homeController.init = function (app) {

        app.post("/skyscanner", function (req, res) {
         
            var market = req.body.market;//"GB";//Great Britain
            var currency = req.body.currency;//"GBP";//United Kingdom of Great Britain and Northern Ireland
            var locale = req.body.locale;//"en-GB";//english great britain
           var originPlace = req.body.fromplace ;//"DEl";//Delhi
           var destinationPlace = req.body.toplace//"LHR";//London Hethrow Airport
           var outboundPartialDate = req.body.departdate;//"2015-04-24";//
            var inboundPartialDate = req.body.returndate;//"2015-04-25";
            var apikey = "prtl6749387986743898559646983194";
            var url = "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/" + market + "/" + currency + "/" + locale + "/" + originPlace + "/" + destinationPlace + "/" + outboundPartialDate +"/" + inboundPartialDate +"/?apiKey=" + apikey;
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    // from within the callback, write data to response, essentially returning it.
                    res.send(body);
                } else {
                    res.send("Some error has occured");
                }
            });
  
        });

  };

})(module.exports);