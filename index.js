
(() => {
    const generate = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
    const def = 'maksimetny';
    const ref = [
        ['github.com'],
        ['vk.com'],
        ['instagram.com'],
        ['fb.com'],
        ['twitter.com'],
        ['t.me'],
        // ['example.com', 'username'] or ['example.com'] for default username
    ];
    const [a, b = def] = ref[generate(0, ref.length - 1)];

    window.location.replace(`https://${a}/${b}`);
})();
