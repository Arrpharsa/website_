// Set tanggal spesial (contoh: ulang tahun pacar atau anniversary)
const specialDate = new Date('2025-05-03T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = specialDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown setiap detik
setInterval(updateCountdown, 1000);
updateCountdown();

// Efek hover pada memory cards
document.querySelectorAll('.memory-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Animasi heart pada hero section
const heart = document.querySelector('.love-quote i');
setInterval(() => {
    heart.style.transform = 'scale(1.2)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 500);
}, 2000);

// Fungsi untuk menampilkan modal
function showQuestion() {
    const modal = document.getElementById('questionModal');
    modal.style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('questionModal');
    modal.style.display = 'none';
}

// Menambahkan event listener untuk tombol close
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
});

// Fungsi untuk memvalidasi jawaban
function validateAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const resultElement = document.getElementById('result');
    
    if (answer === 'ya' || answer === 'sayang banget') {
        // Menampilkan animasi love
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <i class="fas fa-heart" style="font-size: 100px; color: #ff1493; animation: heartbeat 1s infinite;"></i>
                <h2 style="color: #ff1493; margin-top: 20px;">I Love You Too! ❤️</h2>
            </div>
        `;
        
        // Redirect ke dashboard setelah 2 detik
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else if (answer === 'tidak') {
        resultElement.textContent = 'Hmm... coba pikir lagi ya!';
        resultElement.style.color = '#ff1493';
    } else {
        resultElement.textContent = 'Jawaban yang tepat adalah "ya", "sayang banget", atau "tidak"';
        resultElement.style.color = '#ff0000';
    }
}

// Menutup modal ketika mengklik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('questionModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Menutup modal dengan tombol ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}); 