// assets/js/main.js
document.addEventListener('DOMContentLoaded', function(){
  // مثال: إضافة فصل class عند التمرير لرأس الصفحة
  const header = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) header.classList.add('navbar-scrolled');
    else header.classList.remove('navbar-scrolled');
  });

  // Lazy video: تحميل المصدر عند تشغيل الفيديو لأول مرة (تحسين)
  document.querySelectorAll('video').forEach(v => {
    v.addEventListener('play', () => {
      // لو المصدر لم يُحمّل بالكامل بعد، يمكن إضافة تحميل إضافي هنا
    }, { once: true });
  });
});
// assets/js/main.js
document.addEventListener('DOMContentLoaded', function () {
  // Header shadow on scroll
  const header = document.querySelector('nav');
  const toggleHeaderClass = () => {
    if (window.scrollY > 20) header.classList.add('navbar-scrolled');
    else header.classList.remove('navbar-scrolled');
  };
  toggleHeaderClass();
  window.addEventListener('scroll', toggleHeaderClass);

  // Contact form basic client-side validation and simulated submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // native validation
      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      const status = document.getElementById('formStatus');
      status.textContent = 'جاري الإرسال...';
      // Simulated async submit (استبدلها باستدعاء API حقيقي)
      setTimeout(() => {
        status.textContent = 'تم الإرسال بنجاح. سنرد عليك عبر البريد الإلكتروني.';
        contactForm.reset();
        contactForm.classList.remove('was-validated');
      }, 900);
    });
  }

  // Lazy-loading images using native lazy attribute fallback: Use IntersectionObserver for background images
  if ('IntersectionObserver' in window) {
    const lazyBg = document.querySelectorAll('[data-bg]');
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.backgroundImage = `url(${el.dataset.bg})`;
          observer.unobserve(el);
        }
      });
    }, { rootMargin: '200px' });

    lazyBg.forEach(el => io.observe(el));
  }

  // Accessibility: allow "Skip to content" if present
  const skipLink = document.querySelector('.skip-to-content');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
      }
    });
  }
});
