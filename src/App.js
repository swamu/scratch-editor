import React from "react";
import Sidebar from "./components/Sidebar";
import ExecutionArea from "./components/ExecutionArea";
import PreviewArea from "./components/PreviewArea";
import { ItemProvider } from "./components/ItemsContext";
import HistoryArea from "./components/HistoryArea";

export default function App() {
  return (
    <ItemProvider>
      <div className="bg-blue-100 text-xs font-sans overflow-y-hidden">
        <div className="h-screen  overflow-hidden flex flex-row" style={{ width: '1512px'}}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <ExecutionArea />
          </div>
          <div className="relative w-1/12 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <HistoryArea />
          </div>
          <div className="relative w-2/5 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-xl mx-2 p-2">
            <PreviewArea />
          </div>
        </div>
      </div>
    </ItemProvider>
  );
}
