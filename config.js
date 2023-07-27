require('dotenv').config()

const config = {
  backend_api_port : process.env.BACKEND_API_PORT,
  
  corsOptions : {origin: `http://localhost:${process.env.FRONTEND_PORT}`},

  // lsd_jwt_key : 'Jc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJb',
  
  // TokenExpireTime : 86400,// 24 hours

  dbUri : {
    HOST: `${process.env.HOST}`,
    USER: `${process.env.USERNAME}`,
    PASSWORD: `${process.env.PASSWORD}`,
    STORAGE: './db/banner.db',
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  
  // cosb : 666, // 10000

  priTsMeta : {
    Master : {
      pk: 'Mastkey',
      secTs: [],
    },
    StatusKey : {
      table : 'StatusCodes',
      col : [['StatusKey', 'value'], ['Description', 'label']]
    },

  },

}

module.exports = config