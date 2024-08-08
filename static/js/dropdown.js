const dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(dropdownLink => {
    const dropdownContent = dropdownLink.querySelector('.link-dropdown');
    dropdownLink.addEventListener('mouseenter', () => {
        dropdownContent.style.display = 'flex';
    });
    dropdownLink.addEventListener('mouseleave', () => {
        dropdownContent.style.display = 'none';
    });
});