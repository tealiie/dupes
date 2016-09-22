exports.seed = function(knex, Promise) {
  return knex('cate').del()
    .then(function () {
      return Promise.all([
        knex('cate').insert({id: 1, category: 'Lipstick'}),
        knex('cate').insert({id: 2, category: 'Foundation'}),
        knex('cate').insert({id: 3, category: 'Eye Shadow'})
      ]);
    });
};
