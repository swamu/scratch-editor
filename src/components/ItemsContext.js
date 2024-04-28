
import React, { createContext, useContext, useState } from 'react';

const ItemContext = createContext();

export const useItemContext = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [transformProperties, setTransformProperties] = useState({position: {x: 0, y: 0}, rotation: 0});
  const [optionItems, setOptionItems] = useState([
    {
      input: 10
    },
    {
      input: 10
    },
    {
      input: 10
    },
    {
      inputX: 10,
      inputY: 10
    },
    {
      input: 10
    },
    {
      inputSeconds:2,
      inputX: 10,
      inputY: 10
    },
    {
      input: 10
    },
    {
      input: 10
    },
    {
      input: 10
    },
    {
      input: 10
    }
  ]);

  const [historyStack, setHistoryStack] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);

  const [currentStack, setCurrentStack] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <ItemContext.Provider value={{
      optionItems,
      setOptionItems,
      currentStack,
      setCurrentStack,
      transformProperties,
      setTransformProperties,
      historyStack,
      setHistoryStack,
      currentItems,
      setCurrentItems,
      historyItems,
      setHistoryItems
    }}>
      {children}
    </ItemContext.Provider>
  );
};