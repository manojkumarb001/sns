document.getElementById('menu-btn').onclick = function() {
    document.querySelector('.navbar').classList.toggle('active');
}

document.getElementById('nav-close').onclick = function() {
    document.querySelector('.navbar').classList.remove('active');
}

document.getElementById('search-btn').onclick = function() {
    document.querySelector('.search-form').classList.toggle('active');
}

document.getElementById('close-search').onclick = function() {
    document.querySelector('.search-form').classList.remove('active');
}

window.onscroll = function() {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}
