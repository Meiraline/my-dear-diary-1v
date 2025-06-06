import Dexie from 'dexie';

export const db = new Dexie('MyDearDiaryDB');

db.version(1).stores({
  notes: '++id, title, body, createdAt',
  files: '++id, name, data, createdAt',
  settings: 'key, value'
});

// Добавить заметку
export async function addNote(note) {
  return await db.notes.add({ ...note, createdAt: new Date() });
}

// Получить все заметки
export async function getNotes() {
  return await db.notes.toArray();
}

// Обновить заметку
export async function updateNote(id, changes) {
  return await db.notes.update(id, changes);
}

// Удалить заметку
export async function deleteNote(id) {
  return await db.notes.delete(id);
}


