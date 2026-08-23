import React from 'react';
import { TodoItem } from './TodoItem';

/**
 * Görevlerin listelendiği veya boş liste mesajının görüntülendiği bileşen.
 * 
 * @param {Object} props
 * @param {Array} props.todos - Görüntülenecek görevler dizisi
 * @param {string} props.currentFilter - Aktif filtre türü
 * @param {Function} props.onToggle - Tamamlandı durum geçiş fonksiyonu
 * @param {Function} props.onDelete - Görev silme fonksiyonu
 * @param {Function} props.onUpdate - Görev güncelleme fonksiyonu
 */
export const TodoList = ({
  todos,
  currentFilter,
  onToggle,
  onDelete,
  onUpdate
}) => {
  // Boş liste durum mesajını filtreye göre özelleştir
  const getEmptyMessage = () => {
    switch (currentFilter) {
      case 'completed':
        return 'Henüz tamamlanmış bir görev bulunmuyor. Görevlerinizi tamamladıkça burada görüntülenecektir.';
      case 'active':
        return 'Harika! Bekleyen hiçbir göreviniz bulunmuyor 🎉';
      case 'all':
      default:
        return 'Henüz hiç görev eklemediniz. Yukarıdaki formu kullanarak ilk görevinizi ekleyebilirsiniz!';
    }
  };

  if (todos.length === 0) {
    return (
      <div className="card shadow-sm border-0 rounded-4 text-center p-4 p-sm-5 bg-white my-3">
        <div className="card-body">
          <div className="display-1 text-muted mb-3 opacity-50">📋</div>
          <h5 className="fw-semibold text-dark mb-2">Görev Bulunamadı</h5>
          <p className="text-secondary mb-0 mx-auto" style={{ maxWidth: '420px' }}>
            {getEmptyMessage()}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list my-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};
