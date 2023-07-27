const app = require("./app");

const PORT = process.env.BACKEND_API_PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})