exports.seed = function(knex, Promise) {
  return knex('dupes').del()
    .then(function () {
      return Promise.all([
        knex('dupes').insert({id: 1, product_id: 4, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6, image: '/dupes/cozy.png'}),
        knex('dupes').insert({id: 2, product_id: 4, brand: 'Maybelline', name: 'Color Sensation Lip Color', colour: 'Hooked on Pink', price: 7.49, image: '/dupes/hooked_on_pink.png'}),
        knex('dupes').insert({id: 3, product_id: 4, brand: 'Rimmel', name: 'Rimmel London Moisture Renew Lipstick', colour: 'In Love With Ginger', price: 5.47, image: '/dupes/in_love_with_ginger.png'}),
        knex('dupes').insert({id: 4, product_id: 2, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6, image: '/dupes/.png'}),
        knex('dupes').insert({id: 5, product_id: 3, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6, image: '/dupes/.png'}),
        knex('dupes').insert({id: 6, product_id: 3, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6, image: '/dupes/.png'}),
        knex('dupes').insert({id: 7, product_id: 2, brand: 'Colourpop', name: 'Ultra Satin Lip', colour: 'Cozy', price: 6, image: '/dupes/.png'})
      ]);
    });
};
