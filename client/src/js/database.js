import { openDB } from 'idb';
import { header } from './header';

const initdb = async () => {
  const db = await openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      }
    },
  });

//  Call seedDb to seed on initialization
  await seedDb();
};

// Define function to seed the db with the header
const seedDb = async () => {
  console.log('Update the database');

  // Connect to the jate version 1 database.
  const jateDb = await openDB('jate', 1);

  // Create a read/write transaction on the 'jate' object store
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open the 'jate' object store
  const store = tx.objectStore('jate');

  // Update the data in the object store
  const request = store.put({ id: 1, content: header });

  // Get confirmation of the request
  const result = await request;
  console.log('jate database seeded');

  return result;
};

// Implement logic to add content to the database
export const putDb = async (content) => {
};

// Implement logic to get all content from the database
export const getDb = async () => {
};

// Initialize the database
initdb();

