var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  category: category,
  brands: brands,
  // products: products,
  // getDupes: getDupes
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
  .select('brands.brand')
  .where('brands.category_id', '=', req.params.id)
  .then(function (brands) {
    res.render('brands', { brands: brands })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
})
}

// function getGenre(req, res) {
//   var genre = req.query.genre
//   db.getMovies(genre, function (err, movies) {
//     if (err) {
//       return res.send(err.message)
//     }
//     var vm = {
//       movies: movies
//     }
//     res.render('index', vm)
//   })
// }

// function brands (req, res) {
//   knex('products')
//   .join('brands', 'products.brand_id', '=', 'brands.id')
//   .join('cate', 'products.cate_id', '=', 'cate.id')
//   .select('brands.name')
//   .where('cate.id', req.query.cateId)
//   .then(function (brands) {
//     res.render('brands', { cate: brands })
//   })
//   .catch(function (err) {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//   })
// }

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
