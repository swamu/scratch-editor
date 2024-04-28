
import React from "react";
import { useItemContext } from "./ItemsContext";

export default function HistoryArea() {
  const { historyStack, setCurrentStack, historyItems, setCurrentItems  } = useItemContext();

  const setCurrent = (index) => {
    setCurrentStack(historyStack[index]);
    setCurrentItems(historyItems[index]);
  }

  const generateMapItemsInReverse = () => {
    const items = [];
    for(let i = historyStack.length - 1 ; i>=0; i--){
      items.push(
        <button
          className="flex flex-row justify-center items-center bg-gradient-to-r from-green-500 to-blue-400 rounded-lg shadow-md p-5 h-6 my-2 text-white"
          key={`history - ${items.length + 1}`}
          onClick={() => setCurrent(i)}
        >
          History - {items.length + 1}
      </button>
      )
    }
    return items;
  }

    return (
      <div className="flex-none h-full overflow-y-auto p-2 absolute text-gray-700 font-bold">
        History:
        <div className="text-gray-700 font-bold">( click to copy to current stack)</div>
        {generateMapItemsInReverse()}
      </div>
    );
  }
  