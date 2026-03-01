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

    dropdownLink.addEventListener('click', () => {
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

document.querySelectorAll('.toggle-dates').forEach(button => {
    button.addEventListener('click', function () {
        const location = this.closest('.location')
        const box = location.querySelector('.location-dates-collapsible')

        const isOpen = box.classList.contains('open')

        // zavřít všechny ostatní (volitelné, ale doporučeno)
        document.querySelectorAll('.location-dates-collapsible').forEach(el => {
            el.classList.remove('open')
        })

        document.querySelectorAll('.toggle-dates').forEach(btn => {
            btn.classList.remove('active')
        })

        if (!isOpen) {
            box.classList.add('open')
            this.classList.add('active')
        }
    })
})
