const availableBurgers = document.querySelector('.burger-list.available');
const eatBurgerBtns = document.querySelectorAll('.burger-list__btn');

availableBurgers.addEventListener('click', (e) => {
    if (!e.target.matches('.burger-list__btn')) return;

    const targetBurger = {
        id: e.target.dataset['burger'],
    };

    fetch('/api/burgers', {
        headers: { 'Content-Type': 'application/json' },
        method: 'put',
        body: JSON.stringify(targetBurger),
    }).then(window.location.reload());
});
