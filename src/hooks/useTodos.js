import { useState, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

// Uygulama ilk açıldığında örnek görevler (LocalStorage boşsa gösterilir)
const INITIAL_TODOS = [
  {
    id: '1',
    text: 'React ve Vite ile projeyi oluştur',
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    text: 'Bootstrap 5 kütüphanesini projeye dahil et',
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    text: 'CRUD işlevlerini (Ekle, Oku, Güncelle, Sil) tamamla',
    completed: false,
    createdAt: new Date().toISOString()
  }
];

/**
 * Görevlerin durumunu ve CRUD operasyonlarını yöneten özel React Hook'u.
 */
export const useTodos = () => {
  // LocalStorage senkronize görev listesi
  const [todos, setTodos] = useLocalStorage('react_todo_app_tasks', INITIAL_TODOS);
  
  // Aktif filtreleme seçeneği: 'all' | 'active' | 'completed'
  const [filter, setFilter] = useState('all');

  /**
   * Yeni görev ekleme işlevi
   * @param {string} text - Görev başlığı
   */
  const addTodo = (text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return false;

    const newTodo = {
      id: Date.now().toString(),
      text: trimmedText,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    return true;
  };

  /**
   * Görevi kimliğine göre silme işlevi
   * @param {string} id - Silinecek görevin kimliği
   */
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  /**
   * Görevin tamamlandı/tamamlanmadı durumunu değiştirme işlevi
   * @param {string} id - Değiştirilecek görevin kimliği
   */
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  };

  /**
   * Görev metnini güncelleme (düzenleme) işlevi
   * @param {string} id - Güncellenecek görevin kimliği
   * @param {string} newText - Yeni görev başlığı
   */
  const updateTodo = (id, newText) => {
    const trimmedText = newText.trim();
    if (!trimmedText) return false;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, text: trimmedText, updatedAt: new Date().toISOString() }
          : todo
      )
    );
    return true;
  };

  /**
   * Tüm tamamlanmış görevleri temizleme işlevi
   */
  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // Filtrelenmiş görev listesini hesapla (useMemo ile performans optimizasyonu)
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'all':
      default:
        return todos;
    }
  }, [todos, filter]);

  // Özet istatistikleri hesapla
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  return {
    todos: filteredTodos,
    allTodosCount: todos.length,
    filter,
    setFilter,
    stats,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    clearCompleted
  };
};
