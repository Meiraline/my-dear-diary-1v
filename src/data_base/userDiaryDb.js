import Dexie from 'dexie';
const username = localStorage.getItem('currentUser');
if (!username) throw new Error('Пользователь не найден');

export function createUserDiaryDb(username) {
  const db = new Dexie(`Diary_${username}`);
  db.version(1).stores({

// технические переменные 
 
    leftPanel:'open',

 // данные пользователя   
    notes: '++id, title, content, createdAt, updatedAt',
    test: '++id , testTekst',
  });
  return db;
}


export async function getAllTests() {
  const db = createUserDiaryDb(username);
  return await db.test.toArray();
}

export async function addTestEntry(testTekst) {
  const db = createUserDiaryDb(username);
  return await db.test.add({ testTekst });
}