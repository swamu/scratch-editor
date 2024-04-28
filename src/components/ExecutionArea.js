import React, { useState } from "react";
import Chip from "./global/Chip";
import calculateInsertingPosition from "./helpers/global";
import allOptionsData from "./helpers/allOptionsData";
import { useItemContext } from "./ItemsContext";
import Icon from "./global/Icon";

export default function ExecutionArea() {
  const { 
    currentStack,
    setCurrentStack,
    optionItems,
    transformProperties,
    setTransformProperties,
    setHistoryStack,
    historyStack,
    currentItems,
    setCurrentItems,
    historyItems,
    setHistoryItems,
  } = useItemContext();

  const getChipsAndStack = ({
    index, source, droppedChip, prevState, droppedChipPosition
  }) => {
    const newChips = [...currentItems];
    const newCurrentStack = [...currentStack];
    if (source === 1) {
      newChips.splice(index, 1)
      newCurrentStack.splice(index, 1);
    }
    if (droppedChipPosition < newChips.length) {
      newChips.splice(droppedChipPosition, 0, droppedChip);
      newCurrentStack.splice(droppedChipPosition, 0, prevState);
    } else {
      newChips.push(droppedChip);
      newCurrentStack.push(prevState);
    }
    return {newChips, newCurrentStack};
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const index = Number(e.dataTransfer.getData('index'),);
    const originalPos = Number(e.dataTransfer.getData('originalPos'),);
    const source = Number(e.dataTransfer.getData('source'),);

    const droppedChipPosition = calculateInsertingPosition(e, currentItems)
    const chipData = allOptionsData[originalPos];
    const droppedChip = { ...chipData};
    const prevState = source === 0 ? {...optionItems[originalPos]} : {...currentStack[index]};
    const {newChips, newCurrentStack} = getChipsAndStack({
      index, source, droppedChip, prevState, droppedChipPosition
    });

    setCurrentItems(newChips);
    setCurrentStack(newCurrentStack);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const onValueSelected = (key, value, position) => {
    let newCurrentStack = [...currentStack];
    newCurrentStack[position][key] = value;
    setCurrentStack(newCurrentStack)
  }

  const onRunClicked = (e) => {
    const executeFunctions = async (index, tp) => {
      if (index < currentItems.length) {
        const newTP = await currentItems[index].implement(currentStack[index], tp.position, tp.rotation);
        setTransformProperties({...newTP});
        executeFunctions(index + 1, newTP);
      }
    };
    executeFunctions(0, transformProperties);
    if (!historyStack.length || JSON.stringify(currentItems) !== JSON.stringify(historyStack[historyStack.length - 1])){
      setHistoryStack([...historyStack, currentStack]);
      setHistoryItems([...historyItems, currentItems]);
    }
  }

  const onDelete = (index) => {
    const newChips = [...currentItems];
    const newCurrentStack = [...currentStack];
    newChips.splice(index, 1)
    newCurrentStack.splice(index, 1);
    setCurrentItems(newChips);
    setCurrentStack(newCurrentStack);
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-dashed border-gray-300 h-full w-4/5 mt-5 px-9 flex flex-col">
      <button onClick={onRunClicked}>
       <Icon name='play' size={15} className="text-green mx-2" />
      </button>
      {currentItems.map(({ Component, originalPos }, index) => (
        <Chip
          index={index}
          originalPos={originalPos}
          source="1"
          showDelete
          onDelete={() => onDelete(index)}
          key={`${index}-mid-area`}
        >
          <Component
            setSelectedValue={(key, value) => onValueSelected(key, value, index)}
            selectedValue={currentStack[index]}
          />
        </Chip>
      ))
      }
    </div>
  );
};