const pokeImg = document.getElementById('poke-img');
const pokeCaption = document.getElementById('poke-caption');
const pokeInput = document.getElementById('poke-input');
const pokeSubmit = document.getElementById('poke-submit');

const typeColors = {
    water: '#0000FF',
    fire: '#EE8800',
    grass: '#00FF00',
    psychic: '#FFFFFF',
    poison: '#FF00FF',
    ice: '#9999FF',
    fairy: '#FF9999',
    dark: '#333333',
    ghost: '#CC44CC',
    steel: '#888888',
    flying: '#CCCCCC',
    fighting: '#CC6666',
    ground: '#DD7777',
    normal: '#555555',
    dragon: '#22FF22',
    bug: '#11FF11',
    rock: '#BBBBBB'
}

const updatePokeCaption = function (pokeNumber, pokeName, types) {
    // Clear current elements in pokeCaption
    while (pokeCaption.children[0]) {
        pokeCaption.removeChild(pokeCaption.children[0]);
    }

    // Append text part
    const p = document.createElement('p');
    p.innerText = `#${pokeNumber} - ${pokeName}`;
    pokeCaption.appendChild(p);

    // Append types
    typeElements = [];
    for (const type of types) {
        const typeE = document.createElement('div');
        typeE.innerText = type;
        pokeCaption.appendChild(typeE);
        color = typeColors[type];
        console.log(color);
        typeE.classList.add('poke-type');
        if (color) {
            typeE.style.color = color;
            typeE.style.borderColor = color;
        }
    }
}

const updatePokeImage = function (imgUrl) {
    pokeImg.src = imgUrl;
}

const clearInput = function () {
    pokeInput.value = '';
}

const extractTypes = function (types) {
    typeNames = [];
    for (const type of types) {
        typeNames.push(type.type.name);
    }
    return typeNames;
}

const updatePokeContent = function (data) {
    const pokeResultId = data.id;
    const pokeResultName = data.name;
    const pokeResultImg = data.sprites.front_default;
    const types = extractTypes(data.types);

    updatePokeCaption(pokeResultId, pokeResultName, types);
    updatePokeImage(pokeResultImg);
    clearInput();
}

const xhrSubmit = function(url) {
    /**
    XHR is an XMLHttpRequest, which is the core method for us to send
    HTTP requests using JavaScript in the browser. By default, these
    requests are sent asynchronously and handled using event listeners.
    Many events are available on the XHR object, giving us a lot of ways
    to provide feedback to the user, including events for errors, timeouts,
    and intermediate states such as headers being received, request sent, etc.
    */
    const xhr = new XMLHttpRequest(); // readyState 0

    // Open request - Prepares the request
    xhr.open('GET', url); // readyState 1

    xhr.addEventListener('loadend', () => {
        const json = xhr.response;
        const data = JSON.parse(json);
        updatePokeContent(data);
    });

    xhr.send(); // readyState 2
    // when response headers received - readyState 3
    // when response body downloaded completely - readyState 4

}
/**
 * HATEOAS - HyperText as the Engine of Application State
 * Our APIs should return URLs to other API resources so that we
 * can dynamically consume them.
 */


/**
 * Fetch is a newer API for sending HTTP requests
 * It has a more compact syntax and unlike XHR is not event
 * oriented but rather promise oriented.
 * 
 * Promises - Allow us to provide callback functions in a single layer
 * that can be executed sequentially, even when our logic requires us to
 * send or chain multiple requests.  This is made possible because you can
 * return a promise from another promise, and then provide handling logic for it.
 */
const fetchSubmit = function(url) {
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        updatePokeContent(data);
    }).catch(err => {
        // error logic
    })
}

/**
 * async keyword used to declare that a function executes asynchronously
 * Functions declared to execute asynchronously implicitly return a promise
 * We can use the 'await' keyword before an operation that returns a promise
 * to await the resolution of the method before continuing execution.
 * Note: await is only available in async functions
 */

const asyncSubmit = async function(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
    } catch (err) {
        // error handling
    }
    updatePokeContent(data);
}

pokeSubmit.addEventListener('click', (e) => {
    const pokeName = pokeInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    // Send HTTP Request
    // XHR - XmlHttpRequest - AJAX (Asynchronous JavaScript and XML)

    // xhrSubmit(url);
    fetchSubmit(url);

    e.preventDefault();
});

