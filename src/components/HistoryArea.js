
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
          className="bg-white rounded-lg shadow-md p-5 h-6 my-2"
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
      <div className="flex-none h-full overflow-y-auto p-2 absolute">
        History:
        {generateMapItemsInReverse()}
      </div>
    );
  }
  