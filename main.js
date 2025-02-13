const addToCartButtons = document.querySelectorAll('.card button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!'); // Replace with actual cart logic
    });
});

// Placeholder image change (replace with your image URLs or logic)
const propertyImages = document.querySelectorAll('.card img');
propertyImages.forEach(img => {
  img.src = "https://source.unsplash.com/random/300x200/?house"; // Example: Random house image from Unsplash
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const callAgentButtons = document.querySelectorAll('.call-agent');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add to cart logic here (e.g., using local storage or sending data to a server)
        alert("Added to cart!"); // Placeholder
    });
});

callAgentButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Call agent logic here (e.g., opening a phone call link or displaying contact info)
        alert("Calling an agent!"); // Placeholder
    });
});