document.getElementById('menu-placeholder')!.innerHTML = `
<div id="main-menu-button" class="slide-button">
        <div class="slide-button-bar slide-button-top"></div>
        <div class="slide-button-bar slide-button-middle"></div>
        <div class="slide-button-bar slide-button-bottom"></div>
    </div>
    <div class="slide-menu" id="main-menu">
        <div class='slide-menu-content'>
            <ul class="menu" >
                <li><a href="index.html">Home</a></li>
                <li><a href="users.html">Users</a></li>
                <li><a href="tasks.html">Tasks</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </div>
    </div>
`


const mainMenu = document.getElementById('main-menu')!;
document.getElementById('main-menu-button')!.onclick = function() {
        this.classList.toggle('slide-button-open');
    mainMenu.classList.toggle('slide-menu-show');
};