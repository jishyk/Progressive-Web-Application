import { openDB } from 'idb';
import { header } from './header';

// Define function to initialize the IndexedDB database
const initdb = async () => {
  console.log('Initialize the database');

openDB('jate', 1, {
  upgrade(db) {
    if (db.objectStoreNames.contains('jate')) {
      console.log('jate database already exists');
      return;
    }
    db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    console.log('jate database created');
    seedDb();
    console.log('jate database seeded');
  },
});
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

  // Seed local storage if empty
  if (!localStorage.getItem('content')) {
    localStorage.setItem('content', headerContent);
  }

// TODO: Add logic to a method that accepts some content and adds it to the database

export const putDb = async (content) => {
  console.log('Update the database');

  // Connect to the jate version 1 database.
  const jateDb = await openDB('jate', 1);

  // Create a read/write transaction on the 'jate' object store
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open the 'jate' object store
  const store = tx.objectStore('jate');

  // Update the data in the object store
  const request = store.put({ id: 1, content: content });

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);

  return resultString;

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Connect to the jate version 1 database.
  const jateDb = await openDB('jate', 1);

  // Create a readonly transaction on the 'jate' object store
  const tx = jateDb.transaction('jate', 'readonly');

  // Open the 'jate' object store
  const store = tx.objectStore('jate');

  // Get all data in the database
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);

  // Obtain the 'content' key value from the the first object in the array.
  const resultString = result[0].content;

  return resultString;

};

// Initialize the database
initdb();

