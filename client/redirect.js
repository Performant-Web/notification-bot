const query = window.location.search;
const url = query.slice(query.indexOf('=') + 1, query.length);
const fallback = `https${url.slice(url.indexOf(':'), url.length)}`;

window.addEventListener('load', () => {
    window.location.replace(url);
});

document.getElementById('open').href = fallback;