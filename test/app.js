const nodeButton = document.querySelector('.js-btn');

nodeButton.addEventListener('click', () => {
   let name = prompt('What is your name');
    alert("Hello " + name);
});

