import Icon from "../global/Icon"
import React from "react";

const allOptionsData = [
    {
      key:'option-0',
      originalPos: 0,
      implement: (state, position, rotation) => {
        console.log(position);
        return ({
        position: { x: position.x + state.input, y: position.y },
        rotation
      })},
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center text-xs">
            Move
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
            steps
          </div>
        )
      }
    },
    {
      key:'option-1',
      originalPos: 1,
      implement: (state, position, rotation) => {
        const degrees = state.input;
        const newRotation = rotation - degrees;
        return { position, rotation: newRotation };
      },
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center text-xs">
            Turn
            <Icon name='undo' size={15} className="text-white mx-2" />
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
            degrees
          </div>
        )
      }
    },
    {
      key:'option-2',
      originalPos: 2,
      implement: (state, position, rotation) => {
        const degrees = state.input;
        const newRotation = rotation + degrees;
        return { position, rotation: newRotation };
      },
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Turn
            <Icon name='redo' size={15} className="text-white mx-2" />
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
            degrees
          </div>
        )
      }
    },
    {
      key:'option-3',
      originalPos: 3,
      implement: (state, _position, rotation) => {
        const x = state.inputX;
        const y = state.inputY;
        return { position: { x, y }, rotation };
      },
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Go to x:
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.inputX} onChange={(e) => setSelectedValue('inputX', Number(e.target.value))} />
            y: <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.inputY} onChange={(e) => setSelectedValue('inputY', Number(e.target.value))} />
          </div>
        )
      }
    },{
      key:'option-4',
      originalPos: 4,
      implement: (state, position, _rotation) => ({
        position,
        rotation: state.input
      }),
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Point in 
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
            degrees
          </div>
        )
      }
    },{
      key:'option-5',
      originalPos: 5,
      implement: async (state, position, rotation) => {
        let posNew = position;
        const glideX = parseInt(state.inputX);
        const glideY = parseInt(state.inputY);
        return new Promise(function (resolve) { 
            setTimeout(function () {
              posNew =  {x: glideX, y: glideY };
              console.log(rotation)
              resolve({ position: posNew, rotation })
            }, parseInt(state.inputSeconds) * 1000); 
        }); 
      },
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Glide 
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.inputSeconds} onChange={(e) => setSelectedValue('inputSeconds', Number(e.target.value))} /> seconds
            to x: 
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.inputX} onChange={(e) => setSelectedValue('inputX', Number(e.target.value))} />
            y: <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.inputY} onChange={(e) => setSelectedValue('inputY', Number(e.target.value))} />
          </div>
        )
      }
    },
    {
      key:'option-6',
      originalPos: 6,
      implement: (state, position, rotation) => ({
        position: { x: position.x + state.input, y: position.y },
        rotation
      }),
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Change x by 
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
          </div>
        )
      }
    },
    {
      key:'option-7',
      originalPos: 7,
      implement: (state, position, rotation) => ({
        position: { x: state.input, y: position.y },
        rotation
      }),
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Set x to 
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
          </div>
        )
      }
    },
    {
      key:'option-8',
      originalPos: 6,
      implement: (state, position, rotation) => ({
        position: { x: position.x, y: position.y + state.input },
        rotation
      }),
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Change y by 
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
          </div>
        )
      }
    },
    {
      key:'option-9',
      originalPos: 9,
      implement: (state, position, rotation) => ({
        position: { x: position.x, y: state.input },
        rotation
      }),
      Component : ({setSelectedValue, selectedValue}) => {
        return (
          <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
            Set y to 
            <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
          </div>
        )
      }
    },
];

export default allOptionsData;
