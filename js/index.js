(function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        var styleEl = document.createElement('style');

        styleEl.rel =  'stylesheet';

        styleEl.appendChild(document.createTextNode('html { filter: invert(1) hue-rotate(180deg) } img { filter: invert(1) hue-rotate(180deg) }'));
    
        document.head.appendChild(styleEl);
    }
})();
