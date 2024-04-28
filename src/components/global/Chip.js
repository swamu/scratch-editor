import React from "react";
import Icon from "./Icon";

export default function Chip({ children, originalPos, source, index, showDelete, onDelete, type, draggable=true }) {
    const onDragStart = (e) => {
        e.dataTransfer.setData('index', index.toString());
        e.dataTransfer.setData('originalPos', originalPos.toString());
        e.dataTransfer.setData('source', source);
    };

    const gradient =  type === 'option' 
    ? 'bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 shadow-lg border-2 border-blue-600 hover:scale-101 transition-transform duration-300 hover:bg-blue-600 hover:border-transparent hover:rotate-1 transition-opacity duration-300 hover:opacity-60'
    : 'bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg border-2 border-purple-600 hover:scale-101 transition-transform duration-300 hover:bg-blue-600 hover:border-transparent hover:rotate-1 transition-opacity duration-300 hover:opacity-60'

    return (

        <div
            draggable={draggable}
            onDragStart={onDragStart}
            className={`flex flex-row flex-wrap rounded ${gradient} text-white px-1 py-1.5 my-1 text-sm cursor-grab`} >
            {children}
            {showDelete && <button className="ml-auto" onClick={onDelete}>
                <Icon name='cut' size={15} className="text-white mx-2" />
            </button>}
        </div>
    );
};
