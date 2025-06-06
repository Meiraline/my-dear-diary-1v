import Dexie from 'dexie';

export function createUserDb(username) {
  const db = new Dexie(`MyDearDiaryDB_${username}`);
  db.version(1).stores({
    notes: '++id, title, body, createdAt',
    files: '++id, name, data, createdAt',
    settings: 'key, value'
  });
  return db;
}