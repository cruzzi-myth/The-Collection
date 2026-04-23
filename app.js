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
/* --- DIGITAL AUDIO SYSTEM --- */
let audioEnabled = false;
const ambientAudio = document.getElementById('ambient-loop');
const volumeSlider = document.getElementById('volume-slider');
const songNameDisplay = document.getElementById('song-name');
const visualizer = document.getElementById('visualizer');

const currentTrack = {
    title: 'BEλR CUBZ - So Gone',
    artist: 'The Collective',
    album: 'Sacred Frequency Sessions'
};

let fadeInterval;

function toggleAudioMaster() {
    if (!audioEnabled) {
        ambientAudio.play();
        ambientAudio.volume = 0; // Start at zero for the fade-in
        audioEnabled = true;
        
        visualizer.classList.add('playing');
        document.getElementById('audio-icon').className = "fas fa-volume-up click";
        songNameDisplay.innerText = currentTrack.title.toUpperCase();
        
        // Start smooth fade-in to the slider's value
        fadeAudio(volumeSlider.value);

        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: currentTrack.title,
                artist: currentTrack.artist,
                artwork: [{ src: 'assets/logo.png', sizes: '512x512', type: 'image/png' }]
            });
        }
    } else {
        // Fade out before pausing
        fadeAudio(0, () => {
            ambientAudio.pause();
            visualizer.classList.remove('playing');
            document.getElementById('audio-icon').className = "fas fa-volume-mute click";
            songNameDisplay.innerText = "IDLE...";
            audioEnabled = false;
        });
    }
}

// Re-usable smooth fade function
function fadeAudio(targetVolume, callback) {
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
        const step = 0.01;
        if (Math.abs(ambientAudio.volume - targetVolume) < step) {
            ambientAudio.volume = targetVolume;
            clearInterval(fadeInterval);
            if (callback) callback();
        } else {
            ambientAudio.volume += (ambientAudio.volume < targetVolume) ? step : -step;
        }
    }, 30); // 30ms steps = very buttery smooth transition
}

function adjustVolume(val) {
    // If audio is playing, allow manual control to override
    if (audioEnabled) {
        ambientAudio.volume = val;
    }
}

// Scroll-Triggered Fade
window.addEventListener('scroll', () => {
    if (!audioEnabled) return;
    const labelSection = document.getElementById('label');
    const rect = labelSection.getBoundingClientRect();
    
    // Smoothly fade in when reaching section, fade out when leaving
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        fadeAudio(volumeSlider.value);
    } else {
        fadeAudio(0);
    }
});

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX / 20; // Adjust number to change speed
  const y = event.clientY / 20;

  for (let i = 0; i < shapes.length; i++) { // Corrected: i < shapes.length
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    
    // Apply movement + a slight rotation for a more organic feel
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * 5}deg)`;
  }
}
// Add this at the end of your script file
window.toggleModal = toggleModal;
