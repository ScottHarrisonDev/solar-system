process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../build/index.js");
let should = chai.should();

chai.use(chaiHttp);

describe("/GET celestial-bodies", () => {
  it("should return an array of 9 objects", (done) => {
    chai.request(server)
      .get("/celestial-bodies?page=1&perPage=10")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(9);
        done();
      });
  });
  it("response objects should have correct properties", (done) => {
    chai.request(server)
      .get("/celestial-bodies?page=1&perPage=1")
      .end((err, res) => {
        res.body[0].should.have.property("id");
        res.body[0].should.have.property("name");
        res.body[0].should.have.property("picture");
        res.body[0].should.have.property("age");
        res.body[0].should.have.property("mass");
        done();
      });
  });
  it("empty pages should return HTTP 404", (done) => {
    chai.request(server)
      .get("/celestial-bodies?page=2&perPage=10")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("should return a HTTP 400 invalid request error if params are omitted", (done) => {
    chai.request(server)
      .get("/celestial-bodies")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it("should return a HTTP 400 invalid request error if a single param is omitted", (done) => {
    chai.request(server)
      .get("/celestial-bodies?page=1")
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
