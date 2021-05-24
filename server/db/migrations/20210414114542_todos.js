exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.boolean('done')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('todos')
}
