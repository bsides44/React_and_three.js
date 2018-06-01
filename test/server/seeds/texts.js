exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('texts').del()
    .then(function () {
      // Inserts seed entries
      return knex('texts').insert([ 
	{name: "about", title:'{"tereo":"e pā ana ki","english":"about"}',paragraphs:'[{"tereo":"lorum ipsum","english":"english lorum ipsum"}]'}
      ]);
    });
};
