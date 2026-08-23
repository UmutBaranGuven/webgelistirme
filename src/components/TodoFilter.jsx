import React from 'react';

/**
 * Görev filtreleme buton grubu bileşeni (Tümü / Bekleyen / Tamamlanan).
 * 
 * @param {Object} props
 * @param {string} props.currentFilter - Aktif filtre ('all' | 'active' | 'completed')
 * @param {Function} props.onFilterChange - Filtre değiştirme fonksiyonu
 * @param {Function} props.onClearCompleted - Tamamlananları temizleme fonksiyonu
 * @param {number} props.completedCount - Tamamlanan görev sayısı
 */
export const TodoFilter = ({
  currentFilter,
  onFilterChange,
  onClearCompleted,
  completedCount
}) => {
  const filters = [
    { key: 'all', label: 'Tümü', icon: '📝' },
    { key: 'active', label: 'Bekleyen', icon: '⏳' },
    { key: 'completed', label: 'Tamamlanan', icon: '✅' }
  ];

  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 my-3">
      {/* Filtreleme Buton Grubu */}
      <div className="btn-group w-100 w-sm-auto shadow-sm" role="group" aria-label="Görev Filtreleme">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`btn btn-sm px-3 fw-semibold transition-all ${
              currentFilter === f.key
                ? 'btn-primary shadow-sm'
                : 'btn-outline-secondary bg-white'
            }`}
            onClick={() => onFilterChange(f.key)}
          >
            <span className="me-1">{f.icon}</span>
            {f.label}
          </button>
        ))}
      </div>

      {/* Tamamlananları Temizle Butonu (Varsa) */}
      {completedCount > 0 && (
        <button
          type="button"
          className="btn btn-link text-danger btn-sm text-decoration-none fw-medium d-flex align-items-center gap-1 ms-sm-auto"
          onClick={onClearCompleted}
        >
          <span>🧹</span>
          <span>Tamamlananları Temizle ({completedCount})</span>
        </button>
      )}
    </div>
  );
};
