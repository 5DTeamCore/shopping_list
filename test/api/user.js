process.env.NODE_ENV = "test"

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server/app');
const should = chai.should();
chai.use(chaiHttp)

describe('/user/register', () => {
    it('it should register a user', (done) => {
        const user = {
          username: "user-test",
          password: "test",
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

describe('/user/login', () => {
    it('it login a user', (done) => {
        const user = {
          username: "user-test",
          password: "test",
        };
        chai.request(server)
        .post('/user/login')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
