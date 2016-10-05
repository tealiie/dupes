var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  category: category,
  brands: brands,
  products: products,
  dupes: dupes
}

//shows in the initial index of cate
function category (req, res) {
  knex('categories')
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
  knex('brands')
  .join('categories', 'brands.category_id', '=', 'categories.id')
  .select('brands.id','brands.brand')
  .where('brands.category_id', '=', req.params.id)
  .then(function (brands) {
    res.render('brands', { brands: brands })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
})
}

//to get the products of a certain brand
function products (req, res) {
  knex('products')
  .join('brands', 'products.brand_id', '=', 'brands.id')
  .select('products.id', 'products.name', 'products.colour', 'products.price', 'products.image')
  .where('brands.id', '=', req.params.id)
  .then(function (products) {
    res.render('products', { products: products })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
})
}

//to get the dupes of a product
function dupes (req, res) {
  knex('dupes')
  .join('products', 'dupes.product_id', '=', 'products.id')
  .select('products.id', 'dupes.product_id', 'dupes.brand', 'dupes.name', 'dupes.colour', 'dupes.price', 'dupes.image')
  .where('products.id', '=', req.params.id)
  .then(function (dupes) {
    res.render('dupes', { dupes: dupes })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
})
}
