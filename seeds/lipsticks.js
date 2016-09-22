exports.seed = function(knex, Promise) {
  return knex('lipsticks').del()
    .then(function () {
      return Promise.all([
        knex('lipsticks').insert({id: 1, brand: 'Anastacia Beverly Hills'}),
        knex('lipsticks').insert({id: 2, brand: 'Givenchy'}),
        knex('lipsticks').insert({id: 3, brand: 'Y.S.L'}),
        knex('lipsticks').insert({id: 4, brand: 'Bite'}),
        knex('lipsticks').insert({id: 5, brand: 'Kat Von D'}),
        knex('lipsticks').insert({id: 6, brand: 'Urban Decay'}),
        knex('lipsticks').insert({id: 7, brand: 'Dior'}),
        knex('lipsticks').insert({id: 8, brand: 'Lancome'})
      ]);
    });
};
