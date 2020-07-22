document.body.addEventListener('click', () => {
    console.log('In 1st event callback');

    setTimeout(() => {
    	console.log('In timeout callback');
	}, 0);

    requestAnimationFrame(() => {
      console.log('RAF: Animation Frame');
    });

    requestIdleCallback(() => {
      console.log('RIC: Idle');
    })
});

document.body.addEventListener('click', () => {
  console.log('In 2nd callback');
});

document.body.addEventListener('click', () => {
    console.log('In 3rd event callback');

    Promise.resolve().then(() => {
      console.log('Microtask: Immediately Resolved Promise in 3rd callback');
    });

    new Promise((resolve) => {
        resolve(1);
    }).then(() => {
       console.log('Microtask: Second promise in 3rd calblack');
    });

    new Promise((resolve) => {
        resolve(1);
    }).then(() => {
       console.log('Microtask: Third Promise in 3rd callback');
    });
});

document.body.addEventListener('click', () => {
    console.log('In 4th event callback');

    Promise.resolve().then(() => {
      console.log('Microtask: Promise in 4th callback');
    });
});
