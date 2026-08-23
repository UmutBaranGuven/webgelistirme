import React, { useState } from 'react';

/**
 * Tekil görev ögesi bileşeni (Görüntüleme ve Düzenleme Modu ile).
 * 
 * @param {Object} props
 * @param {Object} props.todo - Görev nesnesi
 * @param {Function} props.onToggle - Tamamlandı durumunu değiştirme fonksiyonu
 * @param {Function} props.onDelete - Görevi silme fonksiyonu
 * @param {Function} props.onUpdate - Görev metnini güncelleme fonksiyonu
 */
export const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editError, setEditError] = useState('');

  // Düzenleme modunu başlatır
  const handleStartEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
    setEditError('');
  };

  // Düzenleme değişikliklerini kaydeder
  const handleSaveEdit = () => {
    if (!editText.trim()) {
      setEditError('Görev metni boş bırakılamaz!');
      return;
    }
    const success = onUpdate(todo.id, editText);
    if (success) {
      setIsEditing(false);
      setEditError('');
    }
  };

  // Düzenleme işlemini iptal eder
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
    setEditError('');
  };

  // Klavyeden Enter ile kaydetme veya Escape ile iptal etme
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div
      className={`card mb-3 border-0 shadow-sm rounded-3 transition-all ${
        todo.completed ? 'bg-light text-muted' : 'bg-white'
      }`}
    >
      <div className="card-body p-3">
        {isEditing ? (
          /* Düzenleme Modu (Inline Edit Mode) */
          <div>
            <div className="input-group">
              <input
                type="text"
                className={`form-control rounded-start-2 ${editError ? 'is-invalid' : ''}`}
                value={editText}
                onChange={(e) => {
                  setEditText(e.target.value);
                  if (editError) setEditError('');
                }}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <button
                type="button"
                className="btn btn-success btn-sm px-3 fw-semibold"
                onClick={handleSaveEdit}
              >
                💾 Kaydet
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm px-3"
                onClick={handleCancelEdit}
              >
                ❌ İptal
              </button>
            </div>
            {editError && (
              <div className="text-danger fs-7 mt-1 fw-medium">⚠️ {editError}</div>
            )}
          </div>
        ) : (
          /* Normal Görüntüleme Modu */
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="d-flex align-items-center gap-3 flex-grow-1 text-break">
              {/* Tamamlandı Checkbox */}
              <input
                type="checkbox"
                className="form-check-input flex-shrink-0 cursor-pointer"
                style={{ width: '1.3em', height: '1.3em' }}
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                id={`todo-check-${todo.id}`}
              />

              {/* Görev Metni */}
              <label
                htmlFor={`todo-check-${todo.id}`}
                className={`form-check-label mb-0 cursor-pointer select-none ${
                  todo.completed
                    ? 'text-decoration-line-through text-secondary fst-italic'
                    : 'fw-medium text-dark'
                }`}
              >
                {todo.text}
              </label>
            </div>

            {/* Aksiyon Butonları & Rozetler */}
            <div className="d-flex align-items-center gap-2 flex-shrink-0 ms-auto">
              {/* Tamamlandı / Bekliyor Rozeti */}
              <span
                className={`badge rounded-pill ${
                  todo.completed ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-warning-subtle text-warning-emphasis border border-warning-subtle'
                }`}
              >
                {todo.completed ? 'Completed' : 'Pending'}
              </span>

              {/* Düzenle Butonu */}
              <button
                type="button"
                className="btn btn-outline-primary btn-sm rounded-2 d-flex align-items-center gap-1"
                onClick={handleStartEdit}
                title="Görevi Düzenle"
              >
                ✏️ <span className="d-none d-sm-inline">Düzenle</span>
              </button>

              {/* Sil Butonu */}
              <button
                type="button"
                className="btn btn-outline-danger btn-sm rounded-2 d-flex align-items-center gap-1"
                onClick={() => onDelete(todo.id)}
                title="Görevi Sil"
              >
                🗑️ <span className="d-none d-sm-inline">Sil</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
