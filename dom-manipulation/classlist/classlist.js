const e = document.getElementsByTagName('h1')[0];

setInterval(() => {
    e.classList.toggle('big');

    if (e.classList.contains('red')) {
        e.classList.remove('red');
        e.classList.add('blue');
        return;
    } 

    if (e.classList.contains('blue')) {
        e.classList.remove('blue');
        e.classList.add('green');
        return;
    }

    if (e.classList.contains('green')) {
        e.classList.remove('green');
        e.classList.add('red');
        return;
    }

    e.classList.add('red');
}, 500);