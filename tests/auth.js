const request = require("supertest");

const app = require("../app");
const db = require('../app/models')
const config = require('../config')

describe("Test AUTHENTICATION", () => {

  test("'/api/auth/signin' should handle sign-in process properly", async () => {

    // const response = await request(app).post("/api/auth/signin").send({ 'username':'demo', 'password':'password' });
    
    await db.sequelize.sync({
      force: true
    });

    await request(app)
    .post('/api/auth/signup')
    .send({ username:'demo', password:'password', email:'demo@demo.com' })
    .then((res) => {
      console.log(res);
    })
    .catch(err => {
        // write test for failure here
        console.log(`Error ${err}`)
        // done()
    });


    // await request(app)
    // .post('/api/auth/signin')
    // .send({ username:'demo', password:'password' })
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch(err => {
    //     // write test for failure here
    //     console.log(`Error ${err}`)
    //     // done()
    // });

    // await request(app)
    // .get("/")
    // .then((res) => {
    //   // console.log(res)
    // })

    
  });

});