let count = 0;

const clickyCounter = document.getElementById('clicky-counter');
const clickyButton = document.getElementById('clicky-button');

const incrementCounter = function() {
    // Increment count
    count++;

    // Update clicky-counter element
    clickyCounter.innerText = count;
    console.log(this);
}

clickyButton.addEventListener('click', (e) => {
    incrementCounter();
    // e.preventDefault(); // Prevents the default behavior of this event
});