const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (toggle) toggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

if (toggle) {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  toggle.textContent = current === 'dark' ? 'Light' : 'Dark';
  toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
}
