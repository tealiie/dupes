exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({id: 1, category: 'Lipstick'}),
        knex('categories').insert({id: 2, category: 'Foundation'}),
        knex('categories').insert({id: 3, category: 'Eye Shadow'})
      ]);
    });
};
