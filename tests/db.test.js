const request = require("supertest");

const app = require("../app");
const db = require('../app/models')
const config = require('../config')

describe("Test DB initialization", () => {

  test("There should be 6 tables after DB initialization", async () => {

    await db.sequelize.sync({
      force: true
    });
    // await db.user.create({
    //   USERNAME:'demo',
    //   EMAIL:'demo@demo.com',
    //   PASSWORD:'password'
    // });
    // await db.Sex.bulkCreate([{
    //   ID:1,
    //   Description:'Male'
    // },
    // {
    //   ID:2,
    //   Description:'Female'
    // },]);
    // await db.role.bulkCreate([{
    //   ID:1,
    //   NAME:'admin',
    // },
    // {
    //   ID:2,
    //   NAME:'user',
    // }]);
    // await db.Status.bulkCreate([{
    //   StatusKey:1,
    //   StatusCode:'Undergraduate',
    //   Description:'Applicant with B.S. degree'
    // },
    // {
    //   StatusKey:2,
    //   StatusCode:'Graduate',
    //   Description:'MD student'
    // },
    // {
    //   StatusKey:3,
    //   StatusCode:'Resident',
    //   Description:'Residency'
    // },]);
    // await db.Master.bulkCreate([{
    //   MASTER_ID:1,
    //   LAST_NAME:'Foles',
    //   FIRST_NAME:'Nick',
    //   MI:'A',
    //   GENDER:1,
    //   DOB:'01-01-1990',
    //   STATUS:1,
    // },
    // {
    //   MASTER_ID:2,
    //   LAST_NAME:'Brady',
    //   FIRST_NAME:'Tom',
    //   MI:'J',
    //   GENDER:1,
    //   DOB:'07-22-1979',
    //   STATUS:3,
    // },
    // {
    //   MASTER_ID:3,
    //   LAST_NAME:'Wentz',
    //   FIRST_NAME:'Carson',
    //   MI:'C',
    //   GENDER:2,
    //   DOB:'11-01-1980',
    //   STATUS:1,
    // },
    // {
    //   MASTER_ID:4,
    //   LAST_NAME:'Prescot',
    //   FIRST_NAME:'Dak',
    //   MI:'Z',
    //   GENDER:2,
    //   DOB:'06-12-1995',
    //   STATUS:2,
    // },]);


    // await db.sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {
    //   expect(tableObj.length).toBe(6);
    // })
    // .catch((err) => {
    //   console.log('showAllSchemas ERROR',err);
    // })

  });

});