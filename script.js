const CORRECT_PIN = "1617";
let currentPin = "";
let currentActiveStep = 1;


function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartSymbols = ['❤️', '💖', '💗', '💓', '💕', '❣'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";
        heart.style.fontSize = Math.random() * 15 + 12 + "px";
        
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 350);
}


function spawnHeartEffect(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('click-heart-effect');
    
   
    const hearts = ['❤️', '💖', '💘', '💝', '✨'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
   
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
 
    setTimeout(() => {
        heart.remove();
    }, 600);
}


function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff4d6d', '#ff758f', '#00f2fe', '#ffd700', '#ffffff', '#7722ff'];
    
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const conf = document.createElement('div');
            conf.classList.add('confetti');
            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            conf.style.left = Math.random() * 100 + "vw";
            conf.style.animationDuration = Math.random() * 2 + 2 + "s";
            conf.style.opacity = Math.random();
            conf.style.width = Math.random() * 8 + 6 + "px";
            conf.style.height = conf.style.width;
            
            container.appendChild(conf);
            setTimeout(() => conf.remove(), 4000);
        }, i * 60);
    }
}


function pressKey(num, event) {
  
    if (event) spawnHeartEffect(event.clientX, event.clientY);
    
    if (currentPin.length < 4) {
        currentPin += num;
        document.getElementById('pin-input').value = currentPin;
    }
}

function clearPin(event) {
    if (event) spawnHeartEffect(event.clientX, event.clientY);
    currentPin = "";
    document.getElementById('pin-input').value = "";
    document.getElementById('error-msg').innerText = "";
}

function checkPin(event) {
    if (event) spawnHeartEffect(event.clientX, event.clientY);
    
    if (currentPin === CORRECT_PIN) {
        createConfetti(); // Masayang pasabog kapag tama ang PIN!
        document.getElementById('page-1').classList.remove('active');
        document.getElementById('page-2').classList.add('active');
        document.getElementById('nav-controls').classList.remove('hidden');
    } else {
        document.getElementById('error-msg').innerText = "❌ Maling Puso! Subukan mo ulit.";
        clearPin();
    }
}


function navigatePage(dir) {
   
    document.getElementById(`page-${currentActiveStep + 1}`).classList.remove('active');
    
   
    currentActiveStep += dir;
    
    
    document.getElementById(`page-${currentActiveStep + 1}`).classList.add('active');
    
 
    document.getElementById('current-step').innerText = currentActiveStep;
    document.getElementById('prev-btn').disabled = (currentActiveStep === 1);
    document.getElementById('next-btn').disabled = (currentActiveStep === 3);

   
    createConfetti();
}


createHearts();



