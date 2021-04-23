window.onload = () => {
    const popup = document.querySelector('.popup')
    const overlay = document.querySelector('.overlay')

    const btnClose = document.getElementById('btn-close')
    const btnNuevo = document.querySelector('.btn-nuevo')

    const openPopup = () => {
        popup.classList.toggle('popup-hidde')
        overlay.classList.toggle('overlay-close')
    }

    const closePopup = () => {
        popup.classList.toggle('popup-hidde')
        overlay.classList.toggle('overlay-close')
    }

    btnClose.addEventListener('click', () => {
        closePopup();
    })

    btnNuevo.addEventListener('click', () => {
        openPopup();
    })
}