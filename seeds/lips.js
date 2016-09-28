exports.seed = function(knex, Promise) {
  return knex('lips').del()
    .then(function () {
      return Promise.all([
        knex('lips').insert({id:'1', type: 'lipsticks', brand: 'Anastacia Beverly Hills'}),
        knex('lips').insert({id:'2', type: 'lipsticks', brand: 'Givenchy'}),
        knex('lips').insert({id:'3', type: 'lipsticks', brand: 'Y.S.L'}),
        knex('lips').insert({id:'4', type: 'lipsticks', brand: 'Bite'}),
        knex('lips').insert({id:'5', type: 'lipsticks', brand: 'Kat Von D'}),
        knex('lips').insert({id:'6', type: 'lipsticks', brand: 'Urban Decay'}),
        knex('lips').insert({id:'7', type: 'lipsticks', brand: 'Dior'}),
        knex('lips').insert({id:'8', type: 'lipsticks', brand: 'Lancome'}),
      ])
    })
}
