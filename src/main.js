const shareBtn = document.querySelector('.card__content-button');
const socialIcons = document.querySelector('.card__content-social-icons');
shareBtn.addEventListener('click', ()=>{
    socialIcons.classList.toggle("show");
    shareBtn.classList.toggle('rotate');
})