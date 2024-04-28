import React from "react";
import Chip from "./global/Chip";
import allOptionsData from "./helpers/allOptionsData";
import { useItemContext } from "./ItemsContext";

export default function Sidebar() {
  const { optionItems, setOptionItems } = useItemContext();
  
  const onValueSelected = (key, value, originalPos) => {
    let newOptionItmes = [...optionItems];
    newOptionItmes[originalPos][key] = value;
    setOptionItems(newOptionItmes)
  }

  return (
    <div className=" text-xs w-332 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      {
        allOptionsData.map(({ Component, key, originalPos }, index) => {
          return (<Chip
            key={key}
            index={index}
            originalPos={originalPos}
            source="0"
          >
            <Component setSelectedValue={(key, value) => onValueSelected(key, value, originalPos)} selectedValue={optionItems[originalPos]} />
          </Chip>)
        }
        )
      }
    </div>
  );
}
