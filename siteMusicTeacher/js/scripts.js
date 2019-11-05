let triggerInput = document.querySelector('.header-trigger');
let triggerLink = document.querySelectorAll('.header-trigger__item');

for(let index = 0; index < triggerLink.length; index++)
{
    triggerLink[index].addEventListener('click', function () {
        if (triggerInput.checked = true) {
            triggerInput.checked = false;
        }
    })
}
