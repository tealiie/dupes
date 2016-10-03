var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  cate: cate,
  brands: brands,
  // products: products,
  // getDupes: getDupes
}

//shows in the initial index of cate
function cate (req, res) {
  knex('cate')
  .select()
  .then(function (cate) {
    res.render('index', { cate: cate})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

//to get the brands of a category
function brands (req, res) {
  knex('products')
  .join('brands', 'products.brand_id', '=', 'brands.id')
  .join('cate', 'products.cate_id', '=', 'cate.id')
  .select('brands.name')
  .where('cate.id', req.query.cateId)
  .then(function (brands) {
    res.render('brands', { cate: brands })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

//to get the products of a certain brand
// function Products (req, res) {
//   knex('products')
//   .join('brands', 'product', '=', 'products.brand_id')
//   .select('brands.name', 'products.name as products')
//   .then(function (data) {
//     res.render(data)
//   })
// }
//
// //to get the dupes of a product
//   function getDupes (req, res) {
//   knex('products')
//   .join('dupes', 'products.id', '=', 'dupes.product_id')
//   .select('products.colour', 'dupes.colour as dupes')
//   .then(function (data) {
//     res.render(data)
//   })
// }
