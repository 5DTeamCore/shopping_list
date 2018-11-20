process.env.NODE_ENV = "test"

const chai = require('chai');
const should = chai.should();
const user = require('../../db/modal/user');
const db = require('../../db/db');

describe('User', () => {
  before((done) => {
    db.query('CALL ResetAllTable', (err, result) => {
      done();
    })
  })
  describe('user.post.register', () => {
      it('it should create a user', (done) => {
          const userParam = {
            username: 'Test-User2',
            password: 'Test'
          };
          user.post.register(userParam, (err, success) => {
            success.should.be.true
            done()
          })
      });
  });
  describe('user.post.login', () => {
      it('it should create a user', (done) => {
          const userParam = {
            username: 'Test-User2',
            password: 'Test'
          };
          user.post.login(userParam, (err, success) => {
            success.should.be.true
            done()
          })
      });
  });
})
