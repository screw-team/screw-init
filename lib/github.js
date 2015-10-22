
var util = require('./util.js');

var exports = module.exports = function (option) {
    exports.repos = option.repos || 'https://codeload.github.com/';
    exports.postfix = '/tar.gz/';
};

exports.prototype.download = function (id, cb, progress) {
    if (!id) {
        cb(new Error('must given a component ID'));
        return;
    }

    var c = id.split('@');
    if (!c[1]) {
        c[1] = 'master';
    }

    util.download(exports.repos + c[0] + exports.postfix + c[1], {}, cb, progress);
};
