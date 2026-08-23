/**
 * @file todoTypes.js
 * @description Görev (Todo) veri modelinin tip tanımlarını ve yapısal standartlarını içeren JSDoc belgelendirmesi.
 */

/**
 * @typedef {Object} Todo
 * @property {string} id - Görevin benzersiz kimliği (UUID veya timestamp string)
 * @property {string} text - Görev başlığı / içeriği
 * @property {boolean} completed - Görevin tamamlanma durumu (true: tamamlandı, false: bekliyor)
 * @property {string} createdAt - Görevin oluşturulma tarihi (ISO string formatında)
 * @property {string} [updatedAt] - Görevin son güncellenme tarihi (ISO string formatında)
 */

/**
 * @typedef {'all' | 'active' | 'completed'} FilterType
 * @description Görev listesi için geçerli filtreleme türleri
 */

/**
 * @typedef {Object} TodoStats
 * @property {number} total - Toplam görev sayısı
 * @property {number} completed - Tamamlanan görev sayısı
 * @property {number} active - Bekleyen / Tamamlanmamış görev sayısı
 */

// Modül dışa aktarımı (TypeScript projesinde interface tanımı olarak kullanılabilir)
export {};
