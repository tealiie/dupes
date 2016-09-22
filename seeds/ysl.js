exports.seed = function(knex, Promise) {
  return knex('ysl').del()
    .then(function () {
      return Promise.all([
        knex('ysl').insert({id: 1, name: '', colour: ''}),
        knex('ysl').insert({id: 2, name: '', colour: ''}),
        knex('ysl').insert({id: 3, name: '', colour: ''}),
        knex('ysl').insert({id: 4, name: '', colour: ''}),
        knex('ysl').insert({id: 5, name: '', colour: ''}),
        knex('ysl').insert({id: 6, name: '', colour: ''})
      ]);
    });
};
