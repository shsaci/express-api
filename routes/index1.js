var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get
}

function get (req, res) {
  // knex('users')
  // .select()
  // .then(function (users) {
    // res.render('index', { users: users })

    res.render('test1')

  }

  // .catch(function (err) {
  //   res.status(500).send('DATABASE ERROR: ' + err.message)
  // })
// }
