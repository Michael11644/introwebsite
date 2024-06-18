document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item');
    const removeItemButton = document.getElementById('remove-item');
    const itemList = document.getElementById('item-list');

    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemList.children.length + 1}`;
        itemList.appendChild(newItem);
    });

    removeItemButton.addEventListener('click', () => {
        if (itemList.children.length > 0) {
            itemList.removeChild(itemList.lastChild);
        }
    });
});
