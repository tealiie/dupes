exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(function () {
      return Promise.all([
        knex('products').insert({id: 1, cate_id: 1, brand_id: 3, name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Fushcia Stilletto', price: 37}),
        knex('products').insert({id: 2, cate_id: 1, brand_id: 3, name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Smoking Plum', price: 37}),
        knex('products').insert({id: 3, cate_id: 1, brand_id: 3, name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Beige Blouse', price: 37}),
        knex('products').insert({id: 4, cate_id: 1, brand_id: 3, name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Le Orange', price: 37}),
        knex('products').insert({id: 5, cate_id: 1, brand_id: 3, name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Pourpin Divin', price: 37}),
        knex('products').insert({id: 6, cate_id: 1, brand_id: 3, name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Black Tulip', price: 37})
      ])
    })
}
