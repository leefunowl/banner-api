// pn = page #
// spp = size per page
const paginate = ({ pn, spp }) => {
  const offset = (pn - 1) * spp
  const limit = spp

  return {
    offset,
    limit,
  }
}

// he = handle error
const he = (err, res) => {
  console.log(err)
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving tutorials."
  })
}

module.exports = { paginate, he }
