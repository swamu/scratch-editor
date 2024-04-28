import React, { useRef, useEffect, useState } from "react";
import CatSprite from "./global/CatSprite";
import { useItemContext } from "./ItemsContext";

export default function PreviewArea() {
  const previewAreaRef = useRef(null);
  const { transformProperties, setTransformProperties } = useItemContext();
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
  
  const { rotation } = transformProperties;

  return (
    <div className="flex-none overflow-y-auto p-2 absolute" ref={previewAreaRef} style={{
      left: getAdjustedPosition('x'),
      top: getAdjustedPosition('y'),
      transform: `rotate(${rotation}deg)`,
    }}>
      <CatSprite />
    </div>
  );
}
