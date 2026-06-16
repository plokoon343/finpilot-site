// Central place for the app links — update APK_URL after each new Android build.
const LINKS = {
  web: 'https://financial-app-fawn-nu.vercel.app',
  apk: 'https://expo.dev/artifacts/eas/8sJs7jJCR7FHs1cKig3cFT.apk',
};

// Point every CTA at the right destination (markup uses data-app="web|apk").
document.querySelectorAll('[data-app]').forEach((el) => {
  const target = LINKS[el.getAttribute('data-app')];
  if (target) {
    el.setAttribute('href', target);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  }
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
}

// Current year in the footer
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
