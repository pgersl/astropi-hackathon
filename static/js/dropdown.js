const dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(dropdownLink => {
    const dropdownContent = dropdownLink.querySelector('.link-dropdown');
    let isOpen = false;

    dropdownLink.addEventListener('mouseenter', () => {
        dropdownContent.style.display = 'flex';
    });

    dropdownLink.addEventListener('mouseleave', () => {
        if (!isOpen) {
            dropdownContent.style.display = 'none';
        }
    });

    dropdownLink.addEventListener('click', (event) => {
        event.preventDefault();

        if (isOpen) {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'flex';
        }

        isOpen = !isOpen;
    });

    document.addEventListener('click', (event) => {
        if (!dropdownLink.contains(event.target)) {
            dropdownContent.style.display = 'none';
            isOpen = false;
        }
    });
});
