var path = require('path');

module.exports = (function loadConfig () {
  var config_dir = process.cwd() + '/config',
      env = process.env.NODE_ENV || 'development',
      config_file = config_dir + '/' + env + '.js';
  
  if( path.existsSync(config_file) )
    return require(config_file)
  else
    throw new Error("Config file not found. Try creating one here: `" + config_file + "'")
})();

