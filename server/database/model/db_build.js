
const db = require('../db_connection');

const build = (async () => {
  // Clean up our data. This is optional and is here
  // because of our integration tests
  const exist = await db.schema.hasTable('items');
  // if not found items table create table item;
  if (!exist) {
    await db.schema.createTable('items', (table) => {
      console.log('Creating items table');
      table.increments('id');
      table.string('Name');
      table.text('Description');
    });
    // Create a dummy items
    await db('items').insert([
      {
        Name: 'lubna',
        Description: 'Description lubna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nisl eu metus laoreet tristique vel vitae erat. Sed non justo metus. Donec nec dictum enim, ut facilisis ante. Praesent ultrices ultrices eros, at tempor metus iaculis non. Phasellus ullamcorper est lectus, sit amet porttitor tortor fringilla ut. Duis eget ante eu erat tincidunt tristique tempor id felis. Donec scelerisque non neque sed pellentesque. Praesent vehicula iaculis imperdiet.',
      },
      {
        Name: 'sundus',
        Description: 'Description sundus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nisl eu metus laoreet tristique vel vitae erat. Sed non justo metus. Donec nec dictum enim, ut facilisis ante. Praesent ultrices ultrices eros, at tempor metus iaculis non. Phasellus ullamcorper est lectus, sit amet porttitor tortor fringilla ut. Duis eget ante eu erat tincidunt tristique tempor id felis. Donec scelerisque non neque sed pellentesque. Praesent vehicula iaculis imperdiet.',
      },
      {
        Name: 'Ali',
        Description: 'Description Ali Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nisl eu metus laoreet tristique vel vitae erat. Sed non justo metus. Donec nec dictum enim, ut facilisis ante. Praesent ultrices ultrices eros, at tempor metus iaculis non. Phasellus ullamcorper est lectus, sit amet porttitor tortor fringilla ut. Duis eget ante eu erat tincidunt tristique tempor id felis. Donec scelerisque non neque sed pellentesque. Praesent vehicula iaculis imperdiet. ',
      },
      {
        Name: 'Hammam',

      },
      {
        Name: 'Osama',
        Description: 'Description Osama Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae nisl eu metus laoreet tristique vel vitae erat. Sed non justo metus. Donec nec dictum enim, ut facilisis ante. Praesent ultrices ultrices eros, at tempor metus iaculis non. Phasellus ullamcorper est lectus, sit amet porttitor tortor fringilla ut. Duis eget ante eu erat tincidunt tristique tempor id felis. Donec scelerisque non neque sed pellentesque. Praesent vehicula iaculis imperdiet.',
      },
    ]);
  }
})();
module.exports = build;
