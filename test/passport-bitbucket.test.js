'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-bitbucket.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-bitbucket-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportBitbucket')
      .expect(200);
  });

  it('should GET /passport/bitbucket redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/bitbucket')
      .expect('Location', /^https:\/\/bitbucket.org\/site\/oauth2\/authorize\?response_type=code&redirect_uri=htt/)
      .expect(302);
  });

  it('should GET /passport/bitbucket/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/bitbucket/callback')
      .expect('Location', /^https:\/\/bitbucket.org\/site\/oauth2\/authorize\?response_type=code&redirect_uri=htt/)
      .expect(302);
  });
});
