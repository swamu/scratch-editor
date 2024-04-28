// Checkbox.js
import React from 'react';
import Chip from './Chip';

const Checkbox = ({ label, checked, onChange, type }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center text-xs">
            <input
                type="checkbox"
                className="form-checkbox text-black mx-0.1 my-0.1 px-1"
                checked={checked}
                onChange={onChange}
            />
            <div className="mx-2">
                <Chip
                    index={0}
                    originalPos={0}
                    source="1"
                    draggable={false}
                    showDelete={false}
                    onDelete={() => onDelete(index)}
                    type={type}
                >
                <div className="px-2 text-xs">
                    {label}
                </div>
                </Chip>
            </div>
        </div>
    );
};

export default Checkbox;