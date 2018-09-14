const mainMenu = document.getElementById('main-menu')!;
document.getElementById('main-menu-button')!.onclick = function() {
        this.classList.toggle('slide-button-open');
    mainMenu.classList.toggle('slide-menu-show');
};