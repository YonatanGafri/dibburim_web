document.getElementById('language-select').addEventListener('change', (e) => {
    const lang = e.target.value;
    const isLocal = window.location.protocol === 'file:';
    if (lang === 'he') {
        window.location.href = isLocal ? 'index.html' : '/';
    } else if (lang === 'en') {
        window.location.href = isLocal ? 'en/index.html' : '/en/';
    } else if (lang === 'fr') {
        window.location.href = isLocal ? 'fr/index.html' : '/fr/';
    } else if (lang === 'es') {
        window.location.href = isLocal ? 'es/index.html' : '/es/';
    }
});
