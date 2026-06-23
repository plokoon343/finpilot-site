// ===== Automonie marketing site — shared scripts =====
(function () {
  // App links — update apk after each Android build.
  var LINKS = {
    web: 'https://financial-app-fawn-nu.vercel.app',
    apk: 'https://expo.dev/artifacts/eas/8sJs7jJCR7FHs1cKig3cFT.apk'
  };
  document.querySelectorAll('[data-app]').forEach(function (el) {
    var t = LINKS[el.getAttribute('data-app')];
    if (t) { el.href = t; el.target = '_blank'; el.rel = 'noopener'; }
  });

  // Mobile nav toggle
  var tg = document.getElementById('navToggle'), lk = document.getElementById('navLinks');
  if (tg && lk) {
    tg.addEventListener('click', function () { lk.classList.toggle('open'); });
    lk.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { lk.classList.remove('open'); });
    });
  }

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Scroll reveal
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Count-up stats
  var cu = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, end = +el.getAttribute('data-count'), suf = el.getAttribute('data-suffix') || '', t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1100, 1);
        el.textContent = Math.round(p * end) + suf;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      cu.unobserve(el);
    });
  }, { threshold: .6 });
  document.querySelectorAll('.num[data-count]').forEach(function (el) { cu.observe(el); });
})();
