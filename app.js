const { initPlugin } = require('./lib/mongo');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  didLoad() {
    initPlugin(this.app);
  }
}

module.exports = AppBootHook;
