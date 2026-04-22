// template_s3e4lga
// service_nahe16p
// oCxX4lfQX28pS8TnL

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible");
    emailjs
    .sendForm(
        'service_nahe16p',
        'template_s3e4lga',
        event.target,
        'oCxX4lfQX28pS8TnL'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily univailable. Please contact me directly on email: cruzstudiosart@gmail.com."
      ); 
    })
}
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList.add("modal--open");
}

let contrastToggle = false;
function toggleContrast () {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList.add("dark-theme");
}
else {
  document.body.classList.remove("dark-theme");  
}
}

// Combine your cart logic into one function
function toggleCart() {
    // This is the modern, professional way:
    document.body.classList.toggle('cart-open');
}

function scrollSlider(direction) {
    const slider = document.getElementById('blog-slider');
    // scrollAmount based on slider width for a full "page" scroll
    const scrollAmount = slider.clientWidth; 
    
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
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
