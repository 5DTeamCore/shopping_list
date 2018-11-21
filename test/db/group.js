process.env.NODE_ENV = "test"

const chai = require('chai');
const should = chai.should();
const group = require('../../db/modal/group');
const db = require('../../db/db');

describe('Group', () => {
  before((done) => {
    db.query('CALL ResetAllTable', (err, result) => {
      done()
    })
  })
  describe('POST', () => {
    describe('group.post.create', () => {
      it('it should create a group', (done) => {
        const param = {
          name: 'Test Group',
          user_id: 1
        }
        group.post.create(param, (err, success) => {
          success.should.be.true
          done()
        })
      })
    })
    describe('group.post.addUser', () => {
      it('it should add a user to the group', (done) => {
        const param = {
          group_id: 1,
          user_id: 2
        }
        group.post.addUser(param, (err, success) => {
          success.should.be.true
          done()
        })
      })
    })
    describe('group.post.actionGroup', () => {
      it('it should action a group', (done) => {
        const param = {
          user_group_id: 2,
          action: 'APPROVE'
        }
        group.post.actionGroup(param, (err, success) => {
          success.should.be.true
          done()
        })
      })
    })
  })
  describe('GET', () => {
    describe('group.get.getList', () => {
      it('it should all the groups for a user', (done) => {
        const param = {
          user_id: 1,
        }
        group.get.getList(param, (err, result) => {
          result.length.should.be.eql(1)
          done()
        })
      })
    })
  })
})
