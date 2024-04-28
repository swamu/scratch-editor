
import React, { createContext, useContext, useState } from 'react';
import {initState} from './helpers/initState';
import { Backdrops, Costumes } from './helpers/consts';

const ItemContext = createContext();

export const useItemContext = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [transformProperties, setTransformProperties] = useState({
    position: {x: 0, y: 0}, rotation: 0, scale: 1, costume: Costumes[0].value, backdrop: Backdrops[0].value
  });
  const [optionItems, setOptionItems] = useState(initState);
  const [checkboxes, setCheckboxes] = useState({
    x: false,
    y: false,
    direction: false,
    costume: false,
    backdrop: false,
    size: false,
  })
  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

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
      setHistoryItems,
      checkboxes,
      handleCheckboxChange
    }}>
      {children}
    </ItemContext.Provider>
  );
};