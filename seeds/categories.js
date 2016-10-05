exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({id: 1, category: 'Lipstick', image: '/categories/lipstick.png'}),
        knex('categories').insert({id: 2, category: 'Foundation', image: '/categories/foundation.png'}),
        knex('categories').insert({id: 3, category: 'Eye Shadow', image: '/categories/eyeshadow.png'})
      ]);
    });
};
