import React from "react";
import Chip from "./global/Chip";
import allData from "./helpers/allData";
import { useItemContext } from "./ItemsContext";
import Checkbox from "./global/Checkbox";

export default function Sidebar() {
  const { optionItems, setOptionItems, handleCheckboxChange, checkboxes } = useItemContext();
  
  const onValueSelected = (key, value, originalPos) => {
    let newOptionItmes = [...optionItems];
    newOptionItmes[originalPos][key] = value;
    setOptionItems(newOptionItmes)
  }

  const Options = allData.filter(d => d.type === 'option');
  const Looks = allData.filter(d => d.type === 'looks');
  
  return (
    <div className=" text-xs w-332 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      ------------- OPTIONS ------------------
      {
        Options.map(({ Component, key, originalPos, type }, index) => {
          return (<Chip
            key={key}
            index={index}
            originalPos={originalPos}
            source="0"
            type={type}
          >
            <Component setSelectedValue={(key, value) => onValueSelected(key, value, originalPos)} selectedValue={optionItems[originalPos]} />
          </Chip>)
        }
        )
      }
      <Checkbox
        type="option"
        checked={checkboxes.x}
        onChange={() => handleCheckboxChange('x')}
        label="Show X"
      />
      <Checkbox
        type="option"
        checked={checkboxes.y}
        onChange={() => handleCheckboxChange('y')}
        label="Show Y"
      />
      <Checkbox
        type="option"
        checked={checkboxes.direction}
        onChange={() => handleCheckboxChange('direction')}
        label="Show Direction"
      />

      ------------- LOOKS ------------------
      {
        Looks.map(({ Component, key, originalPos, type }, index) => {
          return (<Chip
            key={key}
            index={index + Options.length}
            originalPos={originalPos}
            source="0"
            type={type}
          >
            <Component setSelectedValue={(key, value) => onValueSelected(key, value, originalPos)} selectedValue={optionItems[originalPos]} />
          </Chip>)
        }
        )
      }
      <Checkbox
        option="looks"
        checked={checkboxes.costume}
        onChange={() => handleCheckboxChange('costume')}
        label="Show Costume"
      />
      <Checkbox
        option="looks"
        checked={checkboxes.backdrop}
        onChange={() => handleCheckboxChange('backdrop')}
        label="Show Backdrop"
      />
      <Checkbox
        option="looks"
        checked={checkboxes.size}
        onChange={() => handleCheckboxChange('size')}
        label="Show Size"
      />
    </div>
  );
}
