const { environment } = require('@rails/webpacker');
environment.loaders.prepend('sass', require('./loaders/sass'));
module.exports = environment;