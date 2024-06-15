document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.parentElement;
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('p').innerText;

            const product = {
                name: productName,
                price: productPrice
            };

            cart.push(product);
            alert(`${productName} has been added to your cart.`);
            console.log(cart);
        });
    });
});