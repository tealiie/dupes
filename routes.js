var development = require('./knexfile').development
var knex = require('knex')(development)

function getCate (req, res) {
  knex('cate')
  .select
}
