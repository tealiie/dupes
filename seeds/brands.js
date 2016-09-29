exports.seed = function(knex, Promise) {
  return knex('brands').del()
    .then(function () {
      return Promise.all([
        knex('brands').insert({id: 1, name: 'Anastacia Beverly Hills'}),
        knex('brands').insert({id: 2, name: 'Givenchy'}),
        knex('brands').insert({id: 3, name: 'Y.S.L'}),
        knex('brands').insert({id: 4, name: 'Becca'}),
        knex('brands').insert({id: 5, name: 'Kat Von D'}),
        knex('brands').insert({id: 6, name: 'Urban Decay'}),
        knex('brands').insert({id: 7, name: 'Dior'}),
        knex('brands').insert({id: 8, name: 'Lancome'}),
        knex('brands').insert({id: 9, name: 'Make Up For Ever'})
      ]);
    });
};
