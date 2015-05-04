(function (controllers) {

  var skyscannerController = require("./skyscannerController");

  controllers.init = function (app) {
        skyscannerController.init(app);
  };

})(module.exports);