const modal = {
    init: function() {
        const modalEl = document.getElementById('myModal');
        const closeModalBtn = document.getElementsByClassName('close-modal')[0];
        closeModalBtn.addEventListener('click', function() {
            modalEl.style.display = 'none';
        })
    },
    updateModal: function(src) {
        const modalEl = document.getElementById('myModal');
        const modalImg = document.getElementById('imgModal');
        modalEl.style.display = 'flex';
        modalImg.src = src;
    }
}

module.exports = modal;