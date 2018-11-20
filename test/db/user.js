process.env.NODE_ENV = "test"

const chai = require('chai');
const should = chai.should();
const user = require('../../db/modal/user');
const db = require('../../db/db');

describe('User', () => {
  before((done) => {
    db.query('CALL ResetAllTable', (err, result) => {
      done()
    })
  })
  describe('POST', () => {
    describe('user.post.register', () => {
      it('it should create a user', (done) => {
          const userParam = {
            username: 'Test-User2',
            password: 'Test'
          }
          user.post.register(userParam, (err, success) => {
            success.should.be.true
            done()
          })
      })
    })
    describe('user.post.login', () => {
      it('it should create a user', (done) => {
          const userParam = {
            username: 'Test-User2',
            password: 'Test'
          }
          user.post.login(userParam, (err, success) => {
            success.should.be.true
            done()
          })
      })
    })
    describe('user.post.addfriend', () => {
      it('it should add a friend', (done) => {
          const userParam = {
            user_id: 1,
            friend_id: 2,
          }
          user.post.addFriend(userParam, (err, success) => {
            success.should.be.true
            done()
          })
      })
    })
    describe('user.post.actionFriendRequest', () => {
      it('it action add a friend request', (done) => {
          const userParam = {
            friend_request_id: 1,
            action: 'APPROVE'
          }
          user.post.actionFriendRequest(userParam, (err, success) => {
            success.should.be.true
            done()
          })
      })
    })
  })
  describe('GET', () => {
    describe('user.get.getFriends', () => {
      it('it should get all friends', (done) => {
        const param = {
          user_id: 1
        }
        user.get.getFriends(param, (err, result) => {
          result.length.should.be.eql(1)
          done()
        })
      })
    })
    describe('user.get.getFriendRequests', () => {
      it('it should get all friend requests', (done) => {
        const param = {
          user_id: 2
        }
        user.get.getFriendRequests(param, (err, result) => {
          result.length.should.be.eql(0)
          done()
        })
      })
    })
  })
})
