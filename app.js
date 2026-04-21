function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const overlay = document.getElementById('cart-overlay');
    
    // Check if it's currently hidden or visible, then flip it
    if (modal.style.display === "block") {
        modal.style.display = "none";
        overlay.style.display = "none";
    } else {
        modal.style.display = "block";
        overlay.style.display = "block";
    }
}

function toggleCart() {
    // This adds/removes the "cart-open" class to the body tag
    document.body.classList.toggle('cart-open');
}


function scrollSlider(direction) {
    const slider = document.getElementById('blog-slider');
    // Calculate the width of one card plus the gap
    const scrollAmount = slider.clientWidth; 
    
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
