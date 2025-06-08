import Dexie from 'dexie';

// Общая БД для пользователей
export const usersDb = new Dexie('MyDearDiaryUsers');
usersDb.version(1).stores({
  users: '++id, username, passwordHash, salt'
});

// Добавление пользователя
export async function addUser(user) {
  console.log('Добавление пользователя в БД:', user);
  await usersDb.users.add(user);
}

// Получение пользователя по username
export async function getUserByUsername(username) {
  return await usersDb.users.get({ username });
}

// Получение всех пользователей (если нужно)
export async function getAllUsers() {
  return await usersDb.users.toArray();
}

// Личная БД пользователя
export function createUserDb(username) {
  const db = new Dexie(`MyDearDiaryDB_${username}`);
  db.version(1).stores({
    notes: '++id, title, body, createdAt',
    files: '++id, name, data, createdAt',
    settings: 'key, value'
  });
  return db;
}