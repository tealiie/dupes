var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  category: category,
  getBrands: getBrands,
  getProducts: getProducts,
  getDupes: getDupes
}

//shows in the initial index of cate
function cate (req, res) {
  knex('cate')
  .select()
  .then(function ('cate') {
    res.render('index', { cate: cate})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

//to get the brands of a category
function getBrands (req, res) {
  knex('cate')
  .join('brands', 'cate.id', '=', 'products.cate_id')
  .select('cate.name' 'brands.name as category')
  .then(function (data) {
    res.render(data)
  })
}

//to get the products of a certain brand
function getProducts (req, res) {
  knex('brands')
  .join('products', 'brands.name', '=', 'products.brand_id')
  .select('brands.name', 'products.name as products')
  .then(function (data) {
    res.render(data)
  })
}

//to get the dupes of a product
  function getDupes (req, res) {
  knex('products')
  .join('dupes', 'products.id', '=', 'dupes.product_id')
  .select('products.colour', 'dupes.colour as dupes')
  .then(function (data) {
    res.render(data)
  })
}
