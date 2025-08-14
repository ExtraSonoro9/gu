document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('nav');
  if (!sidebar) return;

  const path = window.location.pathname.split('/')[1]?.toLowerCase();

  const groups = Array.from(sidebar.querySelectorAll('div'));
  groups.forEach(group => {
    const links = Array.from(group.querySelectorAll('a[href]'));
    if (!links.length) return;

    const filteredLinks = links.filter(link =>
      link.getAttribute('href')?.toLowerCase().includes(`/${path}`)
    );

    if (filteredLinks.length) {
      group.innerHTML = '';
      filteredLinks.forEach(link => group.appendChild(link));
    } else {
      group.remove();
    }
  });

  // Mostramos el sidebar solo cuando está listo
  sidebar.style.visibility = 'visible';
});
