process.env.NODE_ENV = "test"

const chai = require('chai');
const should = chai.should();
const item = require('../../db/modal/item');
const db = require('../../db/db');

describe('Item', () => {
  before((done) => {
    db.query('CALL ResetAllTable', (err, result) => {
      done()
    })
  })
  describe('POST', () => {
    describe('item.post.create', () => {
      it('it should create an item in a group', (done) => {
        const param = {
          name: 'Tissue',
          amount: 10,
          quantity: 1,
          status: 1,
          shopping_group_id: 1,
          category_id: 1,
          user_id: 1
        }
        item.post.create(param, (err, success) => {
          success.should.be.true
          done()
        })
      })
    })
  })
  describe('GET', () => {
    describe('item.get.getItemInGroup', () => {
      it('it should all the items in a group', (done) => {
        const param = {
          group_id: 1,
        }
        item.get.getItemInGroup(param, (err, result) => {
          result.length.should.be.eql(1)
          done()
        })
      })
    })
  })
})
