import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);

describe("GET BodyCompositions", () => {
  it("should return an array of object", async () => {
    const response = await chai.request(app).get("/api/get-all-compositions");

    expect(response).to.have.status(200);
    expect(response.body).to.be.an("array");
    expect(response.body[0]).to.be.an("object");
    expect(response.body[0]).to.have.property("id").that.is.a("string");
  });
});
