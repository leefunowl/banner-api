const db = require('./app/models')

const init = async () => {
  await db.Master.sync({ force: true })
  await db.Status.sync({ force: true })
  await db.Sex.sync({ force: true })
  await db.User.sync({ force: true })
  await db.Role.sync({ force: true })
  await db.User.create({
    USERNAME:'demo',
    EMAIL:'demo@demo.com',
    PASSWORD:'password'
  })
}

init()