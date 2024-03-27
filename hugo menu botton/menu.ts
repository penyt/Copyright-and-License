/*add*/
export default function () {
const leftMenu = document.getElementById('left-menu');
    if (leftMenu) {
        leftMenu.addEventListener('click', () => {
            if (document.getElementById('lmenu').classList.contains('transiting')) return;
            document.body.classList.toggle('show-left-menu');
            slideToggle(document.getElementById('lmenu'), 300);
            leftMenu.classList.toggle('is-left-active');
        });
    }
}
