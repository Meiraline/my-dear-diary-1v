import React, { useEffect, useState } from 'react';
import { getNotes, addNote, deleteNote } from '../../data_base/bd';

const NotesBoard = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', body: '' });

  // Загрузка заметок при монтировании
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const allNotes = await getNotes();
    setNotes(allNotes);
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.title.trim() && !newNote.body.trim()) return;
    await addNote(newNote);
    setNewNote({ title: '', body: '' });
    setShowModal(false);
    loadNotes();
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    loadNotes();
  };

  return (
    <div>
      <h2>Доска с заметками</h2>
      <button onClick={() => setShowModal(true)}>Добавить заметку</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
        {notes.map(note => (
          <div key={note.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            width: '200px',
            background: '#faf8ff',
            position: 'relative'
          }}>
            <strong>{note.title}</strong>
            <p>{note.body}</p>
            <button
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'transparent',
                border: 'none',
                color: '#a259f7',
                cursor: 'pointer'
              }}
              onClick={() => handleDeleteNote(note.id)}
              title="Удалить"
            >✕</button>
          </div>
        ))}
      </div>

      {/* Всплывающее окно */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <form
            onSubmit={handleAddNote}
            style={{
              background: '#fff', padding: '24px', borderRadius: '12px', minWidth: '300px', boxShadow: '0 2px 16px #0002'
            }}
          >
            <h3>Новая заметка</h3>
            <input
              type="text"
              placeholder="Заголовок"
              value={newNote.title}
              onChange={e => setNewNote({ ...newNote, title: e.target.value })}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <textarea
              placeholder="Текст заметки"
              value={newNote.body}
              onChange={e => setNewNote({ ...newNote, body: e.target.value })}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button type="button" onClick={() => setShowModal(false)}>Отмена</button>
              <button type="submit">Сохранить</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NotesBoard;