const moment = require('moment');

const logger = (req, res, next) => {
    console.log(
        `Call API ...: ${req.protocol}://${req.get('host')}${
          req.originalUrl}, date: ${moment().format()}`);
    next();
};
module.exports = logger;