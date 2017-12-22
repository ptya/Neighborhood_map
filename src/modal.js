const modal = {
    init: function() {
        const modal = document.getElementById('myModal');
        const closeModalBtn = document.getElementsByClassName('close-modal')[0];
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        })
    },
    updateModal: function(src) {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('imgModal');
        modal.style.display = 'flex';
        modalImg.src = src;
    }
}

module.exports = modal;