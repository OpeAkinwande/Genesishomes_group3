const callAgentButtons = document.querySelectorAll('.call-agent');

callAgentButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Calling an agent!"); 
    });
});

let cartCount = 0;
const cartCountSpan = document.querySelector('.cart-count');

document.querySelectorAll('.add-to-cart').forEach(button =>{

    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
    });

});