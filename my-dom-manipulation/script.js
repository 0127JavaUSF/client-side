//Access to the DOM is provided through the
// 'document' object

// Getting JavaScript representation of this
// object
const h1 = document.getElementById('my-h1');

const p = document.getElementsByTagName('p')[0];

setInterval(() => {
    h1.innerText = 'My JS updated page';
    p.innerText += '!';
}, 1000);

