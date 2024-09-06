const contentContainer = document.querySelector('.main-content');
const sidebar = document.querySelector('.sidebar');
const sidebarToggleButton = document.querySelector('#sidebar-toggle-button');
const sidebarUntoggleButton = document.querySelector('#sidebar-untoggle-button');

sidebarToggleButton.addEventListener('click', () => {
    sidebar.classList.add('toggled');
    contentContainer.classList.add('sidebar-toggled');
});
sidebarUntoggleButton.addEventListener('click', () => {
    sidebar.classList.remove('toggled');
    contentContainer.classList.remove('sidebar-toggled');
})