import { useState, useEffect } from 'react';

/**
 * LocalStorage ile durum senkronizasyonu sağlayan özel React Hook'u.
 * 
 * @param {string} key - LocalStorage anahtar adı
 * @param {any} initialValue - Varsayılan değer (varsa)
 * @returns {[any, Function]} Durum değeri ve durum güncelleme fonksiyonu
 */
export const useLocalStorage = (key, initialValue) => {
  // İlk yüklemede LocalStorage'dan veriyi oku, yoksa initialValue kullan
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`LocalStorage '${key}' okunurken hata oluştu:`, error);
      return initialValue;
    }
  });

  // storedValue her değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`LocalStorage '${key}' yazılırken hata oluştu:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
