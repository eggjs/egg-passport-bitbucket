'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportBitbucket.name;
  });

  app.passport.mount('bitbucket');
};
