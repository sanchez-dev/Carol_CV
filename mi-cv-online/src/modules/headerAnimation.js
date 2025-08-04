/**
 * Controla la visibilidad del header al hacer scroll.
 * Se oculta al bajar y se muestra al subir.
 */
export function initHeaderAnimation() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('header');

  // Si no hay header, no hacemos nada.
  if (!header) return;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Bajando: oculta el header
      header.classList.add('header-hidden');
      
    } else if (scrollTop < lastScrollTop) {
      // Subiendo: muestra el header
      header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, { passive: true });
}

// Ejecuta la animación cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderAnimation);
} else {
  initHeaderAnimation();
}