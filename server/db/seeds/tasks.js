exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, name: 'Go on bike ride', done: false },
        { id: 2, name: 'Go on a hike', done: false },
        { id: 3, name: 'Shower', done: false }
      ])
    })
}
