document.addEventListener("DOMContentLoaded", () => {
    const gift = document.getElementById('gift');
    const popup = document.getElementById('photoPopup');
    const audio = document.getElementById('bg-music');

    gift.addEventListener('click', () => {
        popup.style.display = 'block';
        popup.classList.add('show');

        audio.volume = 1.0;
        audio.loop = true;
        audio.playbackRate = 2.0;
        audio.play().catch(err => console.log(err));
    });
});