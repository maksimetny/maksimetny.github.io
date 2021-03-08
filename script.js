
const urls = [
    'https://github.com/maksimetny',
    'https://vk.com/maksimetny',
    'https://instagram.com/maksimetny',
    'https://fb.com/maksimetny',
    'https://twitter.com/maksimetny',
    'https://t.me/maksimetny',
];
const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
const rand = randomInteger(0, urls.length - 1);

window.location.href = urls[rand];
