var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  jason: jason,
  del: del,
  put: put,
  add: add
}

function get (req, res) {
  knex('users')
  .select()
  .then(function (users) {
    res.render('index', { users: users })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function jason (req, res) {
  var id = req.params.id
  knex('users')
  .select()
  .where('users.id', id)
  .then(function (users) {
    res.json(users[0])
    // console.log(users);
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function del (req, res) {
  var id = req.params.id
  console.log(id);
  knex('users')
  .where('users.id', id)
  .del()
  // .select()
  .then(function (data) {
    res.status(204).send()
    // res.redirect('/')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function put (req, res) {
  console.log(req.body);
  knex('users')
  .where('users.id', req.body.id)
  .update({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
  })
  .then(function (data) {
    res.status(200).send()
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function add (req, res) {
  console.log(req.body);
  var id = req.body.id
  knex('users')
  .insert({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
  })
  .then(function (data) {
    console.log(id);
    res.status(201).send('http://localhost:3000/users/' + id)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
