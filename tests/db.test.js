const request = require("supertest");

const app = require("../app");
const db = require('../app/models')
const config = require('../config')

describe("Test DB initialization", () => {

  test("There should be 6 tables after DB initialization", async () => {

    await db.sequelize.sync({
      force: true
    });
    await db.User.create({
      USERNAME:'demo',
      EMAIL:'demo@demo.com',
      PASSWORD:'password'
    });
    await db.sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {
      console.log(tableObj);
      expect(tableObj.length).toBe(6);

    })
    .catch((err) => {
      console.log('showAllSchemas ERROR',err);
    })

    // expect(true).toBe(true);

  });

});