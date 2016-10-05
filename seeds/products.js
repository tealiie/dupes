exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(function () {
      return Promise.all([
        // knex('products').insert({id: 1, cate_id: 1, brand_id: 3, name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Fushcia Stilletto', price: 37, image: '/products/fuschia_stiletto.png'}),
        knex('products').insert({id: 2, cate_id: 1, brand_id: 3, name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Rogue Tuxedo', price: 37, image: '/products/rouge_tuxedo.png'}),
        knex('products').insert({id: 3, cate_id: 1, brand_id: 3, name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Beige Blouse', price: 37, image: '/products/beige_blouse.png'}),
        knex('products').insert({id: 4, cate_id: 1, brand_id: 3, name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Le Orange', price: 37, image: '/products/le_orange.png'}),
        knex('products').insert({id: 5, cate_id: 1, brand_id: 3, name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Taupe_Raphael', price: 37, image: '/products/taupe_raphael.png'}),
        knex('products').insert({id: 6, cate_id: 1, brand_id: 3, name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Rose Dahlia', price: 37, image: '/products/rose_dahlia.png'})
      ])
    })
}
