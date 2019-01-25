function resizeFontsize() {
    console.log('执行了');
    var width = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = width / 7.5 + 'px';
}
resizeFontsize();
window.addEventListener('orientationchange', resizeFontsize)
window.addEventListener('resize', resizeFontsize)