const filterItems = document.querySelectorAll('.filter-item');
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(filterButton => {
    filterButton.addEventListener('click', () => {
        if (filterButton.classList.contains('selected')) {
            filterButton.classList.remove('selected');
            filterItems.forEach(filterItem => {
                filterItem.style.display = 'flex';
            });
        } else {
            filterButtons.forEach(filterButton => {
                filterButton.classList.remove('selected');
            });
            filterButton.classList.add('selected');
            const filterId = filterButton.getAttribute('id');
            filterItems.forEach(filterItem => {
                const filterItemClass = filterItem.classList.value;
                if (filterItemClass.includes(filterId)) {
                    filterItem.style.display = 'flex';
                } else {
                    filterItem.style.display = 'none';
                }
            });
        };
    });
});