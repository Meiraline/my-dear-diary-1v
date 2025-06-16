import Dexie from 'dexie';
const username = localStorage.getItem('currentUser');
if (!username) throw new Error('Пользователь не найден');

export function createUserDiaryDb(username) {
  const db = new Dexie(`Diary_${username}`);
  db.version(1).stores({


 // данные пользователя   
    test: '++id , testTekst',
    opoveschenia: '++id, titel, text, detaTime',
    settings: '&key, value',
    blocks: '&id, type, x, y, width, height, data'

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

export async function saveTheme(theme) {
  const db = createUserDiaryDb(username);
  await db.settings.put({ key: 'theme', value: theme });
}

export async function getSavedTheme() {
  const db = createUserDiaryDb(username);
  const record = await db.settings.get('theme');
  return record?.value || 'light'; 
}

const db = createUserDiaryDb(username);

export async function saveBlockState(block) {
  if (!block.id) {
    throw new Error('Block must have a valid id');
  }
  await db.blocks.put(block);
}

export async function getAllBlocks() {
  return await db.blocks.toArray();
}

export async function getBlockById(id) {
  return await db.blocks.get(id);
}

export async function deleteBlock(id) {
  return await db.blocks.delete(id);
}