const addBurgerForm = document.querySelector('.burger-form');

addBurgerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newBurger = {
        name: e.srcElement[0].value,
    };

    fetch('/api/burgers', {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify(newBurger),
    }).then(window.location.reload());
});
