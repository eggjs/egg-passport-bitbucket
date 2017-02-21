'use strict';

const debug = require('debug')('egg-passport-bitbucket');
const assert = require('assert');
const Strategy = require('passport-bitbucket-oauth2').Strategy;

module.exports = app => {
  const config = app.config.passportBitbucket;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-bitbucket] config.passportBitbucket.key required');
  assert(config.secret, '[egg-passport-bitbucket] config.passportBitbucket.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;

  // must require `req` params
  app.passport.use('bitbucket', new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
    // format user
    const user = {
      provider: 'bitbucket',
      id: profile.id,
      name: profile.username,
      displayName: profile.displayName,
      photo: profile._json && profile._json.links && profile._json.links.avatar && profile._json.links.avatar.href,
      accessToken,
      refreshToken,
      params,
      profile,
    };

    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
