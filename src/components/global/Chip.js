import React from "react";
import Icon from "./Icon";

export default function Chip({ children, originalPos, source, index, showDelete, onDelete }) {
    const onDragStart = (e) => {
        e.dataTransfer.setData('index', index.toString());
        e.dataTransfer.setData('originalPos', originalPos.toString());
        e.dataTransfer.setData('source', source);
    };

    return (

        <div
            draggable
            onDragStart={onDragStart}
            className="flex flex-row flex-wrap rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white px-1 py-1.5 my-1 text-sm cursor-grab">
            {children}
            {showDelete && <button className="ml-auto" onClick={onDelete}>
                <Icon name='cut' size={15} className="text-white mx-2" />
            </button>}
        </div>
    );
};
