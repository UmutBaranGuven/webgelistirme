import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoSummary } from '../components/TodoSummary';
import { TodoForm } from '../components/TodoForm';
import { TodoFilter } from '../components/TodoFilter';
import { TodoList } from '../components/TodoList';

/**
 * Ana sayfa bileşeni.
 * Tüm görev yönetimi bileşenlerini ve useTodos custom hook'unu bir araya getirir.
 */
export const Home = () => {
  const {
    todos,
    filter,
    setFilter,
    stats,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    clearCompleted
  } = useTodos();

  return (
    <div className="container py-4 py-md-5" style={{ maxWidth: '800px' }}>
      {/* Üst Başlık & Logo */}
      <header className="text-center mb-4">
        <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-primary bg-opacity-10 mb-3 shadow-sm">
          <span className="fs-1">🚀</span>
        </div>
        <h1 className="fw-bold text-dark tracking-tight mb-2">
          Görev Yönetimi Uygulaması
        </h1>
        <p className="text-secondary lead fs-6 mx-auto mb-0" style={{ maxWidth: '500px' }}>
          Günlük yapılacaklarınızı organize edin, ilerlemenizi takip edin ve verimliliğinizi artırın.
        </p>
      </header>

      {/* İstatistik ve Özet Kartları */}
      <TodoSummary stats={stats} />

      {/* Yeni Görev Ekleme Formu */}
      <TodoForm onAddTodo={addTodo} />

      {/* Filtreleme ve Temizleme Butonları */}
      <TodoFilter
        currentFilter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
        completedCount={stats.completed}
      />

      {/* Görev Listesi / Boş Durum Mesajı */}
      <TodoList
        todos={todos}
        currentFilter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />

      {/* Alt Bilgi (Footer) */}
      <footer className="text-center text-muted fs-7 mt-5 pt-3 border-top">
        <p className="mb-1">
          React & Bootstrap 5 ile geliştirildi • Verileriniz otomatik olarak LocalStorage üzerinde saklanır.
        </p>
      </footer>
    </div>
  );
};

export default Home;
