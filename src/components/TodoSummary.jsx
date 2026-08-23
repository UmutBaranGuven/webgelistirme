import React from 'react';

/**
 * Görev istatistikleri ve özet kartları bileşeni.
 * 
 * @param {Object} props
 * @param {Object} props.stats - Toplam, tamamlanan ve bekleyen sayıları
 * @param {number} props.stats.total - Toplam görev
 * @param {number} props.stats.completed - Tamamlanan görev
 * @param {number} props.stats.active - Bekleyen görev
 */
export const TodoSummary = ({ stats }) => {
  const { total, completed, active } = stats;

  // İlerleme yüzdesi hesabı
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="row g-3 mb-4">
      {/* Toplam Görev Kartı */}
      <div className="col-12 col-sm-4">
        <div className="card border-0 shadow-sm rounded-3 bg-white h-100">
          <div className="card-body p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted fs-7 fw-semibold text-uppercase tracking-wider">
                Toplam Görev
              </span>
              <h3 className="fw-bold text-dark mb-0 mt-1">{total}</h3>
            </div>
            <div className="rounded-circle bg-primary bg-opacity-10 p-3 text-primary fs-4 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
              📊
            </div>
          </div>
        </div>
      </div>

      {/* Bekleyen Görev Kartı */}
      <div className="col-12 col-sm-4">
        <div className="card border-0 shadow-sm rounded-3 bg-white h-100">
          <div className="card-body p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted fs-7 fw-semibold text-uppercase tracking-wider">
                Bekleyen
              </span>
              <h3 className="fw-bold text-warning mb-0 mt-1">{active}</h3>
            </div>
            <div className="rounded-circle bg-warning bg-opacity-10 p-3 text-warning fs-4 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
              ⏳
            </div>
          </div>
        </div>
      </div>

      {/* Tamamlanan Görev Kartı */}
      <div className="col-12 col-sm-4">
        <div className="card border-0 shadow-sm rounded-3 bg-white h-100">
          <div className="card-body p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted fs-7 fw-semibold text-uppercase tracking-wider">
                Tamamlanan
              </span>
              <h3 className="fw-bold text-success mb-0 mt-1">{completed}</h3>
            </div>
            <div className="rounded-circle bg-success bg-opacity-10 p-3 text-success fs-4 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
              ✅
            </div>
          </div>
        </div>
      </div>

      {/* İlerleme Çubuğu (Progress Bar) */}
      {total > 0 && (
        <div className="col-12 mt-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="fs-7 text-muted fw-semibold">Tamamlanma Oranı</span>
            <span className="fs-7 fw-bold text-primary">%{completionPercentage}</span>
          </div>
          <div className="progress" style={{ height: '8px' }}>
            <div
              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${completionPercentage}%` }}
              aria-valuenow={completionPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
