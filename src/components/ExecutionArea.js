import React, { useState } from "react";
import Chip from "./global/Chip";
import calculateInsertingPosition from "./helpers/global";
import allData from "./helpers/allData";
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
    const chipData = allData[originalPos];
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
        const newTP = await currentItems[index].implement(currentStack[index], tp);
        setTransformProperties({...newTP});
        executeFunctions(index + 1, newTP);
      }
    };
    executeFunctions(0, transformProperties);
    if ((
      !historyItems.length && currentItems.length)
      || JSON.stringify(currentItems) !== JSON.stringify(historyItems[historyItems.length - 1])){
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
      className="border-dashed border-gray-300 h-full w-4/5 mt-5 px-4 flex flex-col text-green-700 relative">
      <div className="absolute text-gray-700 font-bold">( click &#9654; to play | re arrange order of commands here)</div>
      <button onClick={onRunClicked} disabled={!currentItems.length} className="mt-4">
       <Icon name='play' size={20} className="mx-2 my-4" />
      </button>
      {currentItems.map(({ Component, originalPos, type }, index) => (
        <Chip
          index={index}
          originalPos={originalPos}
          source="1"
          showDelete
          onDelete={() => onDelete(index)}
          key={`${index}-mid-area`}
          type={type}
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