exports.seed = function(knex, Promise) {
  return knex('brands').del()
    .then(function () {
      return Promise.all([
        knex('brands').insert({id: 1, brand: 'Anastacia Beverly Hills', category_id: '1'}),
        knex('brands').insert({id: 2, brand: 'Givenchy', category_id: '1'}),
        knex('brands').insert({id: 3, brand: 'Y.S.L', category_id: '1'}),
        knex('brands').insert({id: 4, brand: 'Becca', category_id: '1'}),
        knex('brands').insert({id: 5, brand: 'Kat Von D', category_id: '1'}),
        knex('brands').insert({id: 6, brand: 'Urban Decay', category_id: '3'}),
        knex('brands').insert({id: 7, brand: 'Dior', category_id: '3'}),
        knex('brands').insert({id: 8, brand: 'Lancome', category_id: '2'}),
        knex('brands').insert({id: 9, brand: 'Make Up For Ever', category_id: '2'})
      ]);
    });
};
