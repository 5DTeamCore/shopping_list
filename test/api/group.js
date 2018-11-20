process.env.NODE_ENV = "test"

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server/app');
const should = chai.should();
chai.use(chaiHttp)

describe('/group/create', () => {
    it('it should create a group for the user', (done) => {
        const user = {
          user_id: 1,
        };
        chai.request(server)
        .post('/user/register')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
