// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Below, write the necessary code so that clicking any "Click Me"
// element will increment its paired counter.
//
//
console.log('Welcome to the Exercise');

// Solution
const buttons = document.querySelectorAll('button, #click-me, a, p span');
const incrementHandler = function (e) {
	this.nextElementSibling.innerHTML++;
	e.preventDefault();
};
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', incrementHandler);
}

// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
const containerEl = document.getElementById('container');
const counterEl = document.createElement('div');
counterEl.id = 'counter';
counterEl.innerHTML = 0;
containerEl.prepend(counterEl);


// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.const container = document.getElementById('container');
const countGlobalHandler = function (e) {
	counterEl.innerHTML++;
	if (counterEl.innerHTML > 20) {
		counterEl.classList.add('pass');
		counterEl.classList.remove('goal');
	} else if (counterEl.innerHTML > 10) {
		counterEl.classList.add('goal');
	} else {
		counterEl.classList.remove('goal');
	}
	e.preventDefault();
};

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', countGlobalHandler);
}