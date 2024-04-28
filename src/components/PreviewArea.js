import React, { useRef, useEffect, useState } from "react";
import CatSprite from "./global/CatSprite";
import { useItemContext } from "./ItemsContext";
import { Backdrops, Costumes } from "./helpers/consts";

export default function PreviewArea() {
  const previewAreaRef = useRef(null);
  const { transformProperties, setTransformProperties, checkboxes } = useItemContext();
  const [previewAreaDimensions, setPreviewAreaDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { current: previewAreaElement } = previewAreaRef;
    if (previewAreaElement) {
      const { height, width } = previewAreaElement.getBoundingClientRect();
      setPreviewAreaDimensions({ width, height });
    }
  }, []);

  const getAdjustedPosition = (type) => {
    const { position } = transformProperties;
    const { width, height } = previewAreaDimensions;

    if (type === 'x') {
      const newX = Math.max(0, Math.min(position.x, width));
      if (newX !== position.x) {
        setTransformProperties({ ...transformProperties, position: { x: newX, y: position.y } });
      }
      return newX;
    }

    if (type === 'y') {
      const newY = Math.max(0, Math.min(position.y, height));
      if (newY !== position.y) {
        setTransformProperties({ ...transformProperties, position: { x: position.x, y: newY } });
      }
      return newY;
    }

    return position;
  }

  const { rotation, scale, costume, backdrop, position } = transformProperties;
  const commonClass = 'absolute z-10 bg-gradient-to-br from-blue-700 to-blue-300 py-1 text-white px-2 w-1/3 rounded'

  return (
    <div className={`w-full h-full ${Backdrops[backdrop].class}`}>
      {checkboxes.x && <div className={`${commonClass} top-0`}>Show X : {position.x} </div>}
      {checkboxes.y && <div className={`${commonClass} top-8`}>Show Y :  {position.y} </div>}
      {checkboxes.direction && <div className={`${commonClass} top-16`}>Show Direction : {rotation} </div>}
      {checkboxes.costume && <div className={`${commonClass} top-24`}>Show Costume : {Backdrops[backdrop].name}</div>}
      {checkboxes.backdrop && <div className={`${commonClass} top-32`}>Show Backdrop : {Costumes[costume].name}</div>}
      {checkboxes.size && <div className={`${commonClass} top-40`}>Show Size : {scale * 100} %</div>}
      <div className="flex-none overflow-y-auto p-2 absolute z-1" ref={previewAreaRef} style={{
        left: getAdjustedPosition('x'),
        top: getAdjustedPosition('y'),
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: '0% 0% 0px',
      }}>
        <CatSprite costume={costume} />
      </div>
    </div>
  );
}
