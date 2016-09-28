exports.seed = function(knex, Promise) {
  return knex('ysl').del()
    .then(function () {
      return Promise.all([
        knex('ysl').insert({id: 1, brand: 'Y.S.L', name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Fuschia Stiletto', price: 37}),
        knex('ysl').insert({id: 2, brand: 'Y.S.L', name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Beige Blouse', price: 37}),
        knex('ysl').insert({id: 3, brand: 'Y.S.L', name: 'Rouge Volupté Shine Oil-In-Stick', colour: 'Rouge Tuxedo', price: 37}),
        knex('ysl').insert({id: 4, brand: 'Y.S.L', name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Le Orange', price: 37}),
        knex('ysl').insert({id: 5, brand: 'Y.S.L', name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Taupe Raphael', price: 37}),
        knex('ysl').insert({id: 6, brand: 'Y.S.L', name: 'Rouge Pur Couture Satin Radiance Lipstick', colour: 'Rougue Heroine', price: 37})
      ]);
    });
};
