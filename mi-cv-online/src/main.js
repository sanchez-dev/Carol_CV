// Importamos las funciones de nuestros módulos
import { initHeaderAnimation } from './modules/headerAnimation.js';
import { initSmoothScrolling } from './modules/smoothScroll.js';

// Nos aseguramos de que el DOM esté completamente cargado antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
  // Inicializamos nuestras funcionalidades
  initHeaderAnimation();
  initSmoothScrolling();
});
