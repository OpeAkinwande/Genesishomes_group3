const callAgentButtons = document.querySelectorAll('.call-agent');

callAgentButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Calling an agent!"); 
    });
});

let cartCount = 0;
const cartCountSpan = document.querySelector('.cart-count');
let button = document.querySelector('.add-to-cart')

document.querySelectorAll('.add-to-cart').forEach(button =>{

    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
        button.innerHTML = 'Bookmarked'
        button.style.backgroundColor = 'gray';
    });

});

const bookclick = document.querySelector('.book-click')
const bpopup = document.querySelector('.b-popup')
const closepopup = document.querySelector('.close-popup')

bookclick.addEventListener('click', () => {
    bpopup.classList.add('active');
})

closepopup.addEventListener('click', () => {
    bpopup.classList.remove('active');
})

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});