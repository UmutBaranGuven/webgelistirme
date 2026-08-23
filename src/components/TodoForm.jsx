import React, { useState } from 'react';

/**
 * Yeni görev ekleme formu bileşeni.
 * 
 * @param {Object} props
 * @param {Function} props.onAddTodo - Görev ekleme fonksiyonu
 */
export const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  // Form gönderme işleyicisi
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError('Lütfen geçerli bir görev başlığı giriniz!');
      return;
    }

    const success = onAddTodo(text);
    if (success) {
      setText('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
        <div className="card-body p-3 p-sm-4 bg-white">
          <label htmlFor="todo-input" className="form-label fw-semibold text-secondary mb-2">
            Yeni Görev Ekle
          </label>
          <div className="input-group">
            <input
              id="todo-input"
              type="text"
              className={`form-control form-control-lg fs-6 rounded-start-3 ${
                error ? 'is-invalid' : ''
              }`}
              placeholder="Örn: Hafta sonu kodlama egzersizi yap..."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (error) setError('');
              }}
            />
            <button
              type="submit"
              className="btn btn-primary px-4 fw-semibold rounded-end-3 d-flex align-items-center gap-2"
            >
              <span>➕</span>
              <span>Ekle</span>
            </button>
          </div>
          {error && (
            <div className="invalid-feedback d-block mt-2 fs-7 fw-medium">
              ⚠️ {error}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
