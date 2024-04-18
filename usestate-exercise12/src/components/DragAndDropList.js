import React, { useState } from 'react';

function DragAndDropList() {
    const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const [items, setItems] = useState(initialItems);
    const [draggingItem, setDraggingItem] = useState(null);

    const handleDragStart = (index) => {
        setDraggingItem(index);
    };

    const handleDragEnd = () => {
        const newItems = [...items];
        const draggedItem = newItems.splice(draggingItem, 1)[0];
        newItems.splice(draggingItem < draggingItem ? draggingItem : draggingItem - 1, 0, draggedItem);
        setItems(newItems);
        setDraggingItem(null);
    };

    return (
        <div>
            <h2>Drag and Drop List</h2>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragEnd={handleDragEnd}
                        style={{ backgroundColor: draggingItem === index ? 'lightblue' : 'transparent' }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DragAndDropList;