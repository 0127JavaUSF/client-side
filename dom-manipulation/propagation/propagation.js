const divs = document.getElementsByTagName('div');
// const divs = document.querySelectorAll('div.selected')

/**
 * Propagation is the process in which events begin and trigger event listeners.
 * Event propagation by default is in 'bubbling' mode, which starts at the 
 * inner-most element (where the event was triggered) and propagates outward.
 * An alternative form is called capturing - capturing starts at the outermost
 * and works its way in.  Capturing can be enabled by adding an event listener
 * with a truthy third parameter.
 */

for(let div of divs) {
    console.log(div);
    div.addEventListener('click', (e) => {
        div.classList.toggle('active');
        // e.stopPropagation();
    });
}