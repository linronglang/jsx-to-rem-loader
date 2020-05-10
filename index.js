const loaderUtils = require('loader-utils');

const defaultopts = {
  remUnit: 100,
  remFixed: 2
};

module.exports = function(source) {
  const opts = loaderUtils.getOptions(this);
  const config = Object.assign({}, defaultopts, opts);
  const ZPXRegExp = /\b(\d+(\.\d+)?)RPX\b/;
  let pxGlobalRegExp = new RegExp(ZPXRegExp.source, 'g');
  if (this.cacheable) {
    this.cacheable();
  }
  if (pxGlobalRegExp.test(source)) {
    return source.replace(pxGlobalRegExp, ($0, $1) => {
      let val = $1 / config.remUnit;
      val = parseFloat(val.toFixed(config.remFixed));
      return val === 0 ? val : val + 'rem';
    });
  } else {
    return source;
  }
};
