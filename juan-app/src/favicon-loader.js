import favicon from './assets/favicon.png';

let link = document.createElement('link');
link.type = 'image/png';
link.rel = 'shortcut icon';
link.href = favicon;
document.head.appendChild(link);