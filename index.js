document.addEventListener('scroll', () => {
    const sRectangles = document.querySelectorAll('.srectangle1');
    sRectangles.forEach(sRectangle => {
        sRectangle.style.animation = 'none';
        sRectangle.offsetHeight; /* trigger reflow */
        sRectangle.style.animation = 'slideInRight 1s forwards';
    });
});
