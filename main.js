const callAgentButtons = document.querySelectorAll('.call-agent');

callAgentButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Calling an agent!"); 
    });
});

let cartCount = 0;
const cartCountSpan = document.querySelector('.cart-count');

document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
        button.innerHTML = 'Bookmarked';
        button.style.backgroundColor = 'gray';

        // Add highlighted class to the corresponding grid item
        const gridItem = button.closest('.grid-item');
        gridItem.classList.add('highlighted');

        // Add the bookmarked item to the popup container
        const popupItemsContainer = document.querySelector('.popup-items');
        const gridItemClone = gridItem.cloneNode(true);
        const closeButton = gridItemClone.querySelector('.add-to-cart');
        // closeButton.innerHTML = "Bookmarked"; // Change button text to Bookmarked
        gridItemClone.querySelector('.add-to-cart').disabled = true; // Disable bookmark button in the popup

        popupItemsContainer.appendChild(gridItemClone);
    });
});

const bookclick = document.querySelector('.book-click');
const bpopup = document.querySelector('.b-popup');
const closepopup = document.querySelector('.close-popup');

bookclick.addEventListener('click', () => {
    bpopup.classList.add('active');
});

closepopup.addEventListener('click', () => {
    bpopup.classList.remove('active');
});

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
