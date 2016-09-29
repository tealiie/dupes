exports.seed = function(knex, Promise) {
  return knex('dupes').del()
    .then(function () {
      return Promise.all([
        knex('dupes').insert({id: 1, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6}),
        knex('dupes').insert({id: 2, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6}),
        knex('dupes').insert({id: 3, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6}),
        knex('dupes').insert({id: 4, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6}),
        knex('dupes').insert({id: 5, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6}),
        knex('dupes').insert({id: 6, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6}),
        knex('dupes').insert({id: 7, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6})
      ]);
    });
};
