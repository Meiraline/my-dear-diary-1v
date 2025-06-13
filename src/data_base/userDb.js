import Dexie from 'dexie';

// Создание пользователя


export const usersDb = new Dexie('MyDearDiaryUsers');
usersDb.version(1).stores({
  users: '++id, username, passwordHash, salt',
});

export async function addUser(user) {
  return await usersDb.users.add(user);
}

export async function getUserByUsername(username) {
  return await usersDb.users.get({ username });
}


