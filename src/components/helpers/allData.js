import Icon from "../global/Icon"
import React from "react";
import { Backdrops, Costumes } from "./consts";

const allData = [
  {
    key: 'option-0',
    type: 'option',
    originalPos: 0,
    implement: (state, transformProps) => {
      const { position } = transformProps;
      return ({
        ...transformProps,
        position: { x: position.x + state.input, y: position.y },
      })
    },
    Component: ({ setSelectedValue, selectedValue }) => {
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
    key: 'option-1',
    type: 'option',
    originalPos: 1,
    implement: (state, transformProps) => {
      const { rotation } = transformProps;
      const degrees = state.input;
      const newRotation = rotation - degrees;
      return { ...transformProps, rotation: newRotation };
    },
    Component: ({ setSelectedValue, selectedValue }) => {
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
    key: 'option-2',
    type: 'option',
    originalPos: 2,
    implement: (state, transformProps) => {
      const { rotation } = transformProps;
      const degrees = state.input;
      const newRotation = rotation + degrees;
      return { ...transformProps, rotation: newRotation };
    },
    Component: ({ setSelectedValue, selectedValue }) => {
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
    key: 'option-3',
    type: 'option',
    originalPos: 3,
    implement: (state, transformProps) => {
      const x = state.inputX;
      const y = state.inputY;
      return { ...transformProps, position: { x, y }, };
    },
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Go to x:
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.inputX} onChange={(e) => setSelectedValue('inputX', Number(e.target.value))} />
          y: <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.inputY} onChange={(e) => setSelectedValue('inputY', Number(e.target.value))} />
        </div>
      )
    }
  }, {
    key: 'option-4',
    type: 'option',
    originalPos: 4,
    implement: (state, transformProps) => ({
      ...transformProps,
      rotation: state.input
    }),
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Point in
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
          degrees
        </div>
      )
    }
  }, {
    key: 'option-5',
    type: 'option',
    originalPos: 5,
    implement: async (state, transformProps) => {
      const { position, rotation } = transformProps;
      let posNew = position;
      const glideX = parseInt(state.inputX);
      const glideY = parseInt(state.inputY);
      return new Promise(function (resolve) {
        setTimeout(function () {
          posNew = { x: glideX, y: glideY };
          resolve({ ...transformProps, position: posNew, })
        }, parseInt(state.inputSeconds) * 1000);
      });
    },
    Component: ({ setSelectedValue, selectedValue }) => {
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
    key: 'option-6',
    type: 'option',
    originalPos: 6,
    implement: (state, transformProps) => ({
      ...transformProps,
      position: { x: position.x + state.input, y: position.y },
    }),
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Change x by
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
        </div>
      )
    }
  },
  {
    key: 'option-7',
    type: 'option',
    originalPos: 7,
    implement: (state, transformProps) => ({
      ...transformProps,
      position: { x: state.input, y: position.y },
    }),
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Set x to
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
        </div>
      )
    }
  },
  {
    key: 'option-8',
    type: 'option',
    originalPos: 6,
    implement: (state, transformProps) => ({
      ...transformProps,
      position: { x: position.x, y: position.y + state.input },
    }),
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Change y by
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
        </div>
      )
    }
  },
  {
    key: 'option-9',
    type: 'option',
    originalPos: 9,
    implement: (state, transformProps) => ({
      ...transformProps,
      position: { x: position.x, y: state.input },
    }),
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Set y to
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
        </div>
      )
    }
  },
  {
    key: 'looks-0',
    type: 'looks',
    originalPos: 10,
    implement: (state, transformProps) => ({
      ...transformProps,
      scale: (1 + state.input * 0.01)
    }),
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Change size by
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
        </div>
      )
    }
  },
  {
    key: 'looks-1',
    type: 'looks',
    originalPos: 11,
    implement: (state, transformProps) => ({
      ...transformProps,
      scale: state.input * 0.01
    }),
    Component: ({ setSelectedValue, selectedValue }) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Change size to
          <input className="rounded text-black w-10 mx-3 my-0.1 px-1" type="number" value={selectedValue.input} onChange={(e) => setSelectedValue('input', Number(e.target.value))} />
          %
        </div>
      )
    }
  },
  {
    key: 'looks-2',
    type: 'looks',
    originalPos: 12,
    implement: (_, transformProps) => ({
      ...transformProps,
      scale: 1,
      costume: Costumes[0].value,
      backdrop: Backdrops[0].value
    }),
    Component: () => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Clear
        </div>
      )
    }
  },
  {
    key: 'looks-3',
    type: 'looks',
    originalPos: 13,
    implement: (_, transformProps) => ({
      ...transformProps,
      costume: transformProps.costume ? 0 : 1,
    }),
    Component: () => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Next Costume
        </div>
      )
    }
  },
  {
    key: 'looks-4',
    type: 'looks',
    originalPos: 14,
    implement: (state, transformProps) => ({
      ...transformProps,
      costume: state.input,
    }),
    Component: ({setSelectedValue, selectedValue}) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center text-xs">
          Change Costume 
          <select
            className="text-black appearance-none bg-white border border-gray-400 hover:border-gray-500 px-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline ml-2"
            value={selectedValue.input.toString()}
            onChange={(e) => {
              setSelectedValue('input', Number(e.target.value))
            }}
          >
            <option className="rounded text-black w-10 mx-3 px-1" value={`${Costumes[0].value}`}> {Costumes[0].name} </option>
            <option className="rounded text-black w-10 mx-3 px-1" value={`${Costumes[1].value}`}> {Costumes[1].name} </option>
          </select>
        </div>
      )
    }
  },
  {
    key: 'looks-5',
    type: 'looks',
    originalPos: 15,
    implement: (_, transformProps) => ({
      ...transformProps,
      scale: 1
    }),
    Component: () => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Show
        </div>
      )
    }
  },
  {
    key: 'looks-6',
    type: 'looks',
    originalPos: 16,
    implement: (_, transformProps) => ({
      ...transformProps,
      scale: 0
    }),
    Component: () => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Hide
        </div>
      )
    }
  },
  {
    key: 'looks-7',
    type: 'looks',
    originalPos: 17,
    implement: (state, transformProps) => ({
      ...transformProps,
      backdrop: state.input,
    }),
    Component: ({setSelectedValue, selectedValue}) => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center text-xs">
          Change Backdrops 
          <select
            className="text-black appearance-none bg-white border border-gray-400 hover:border-gray-500 px-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline ml-2"
            value={selectedValue.input.toString()}
            onChange={(e) => setSelectedValue('input', Number(e.target.value))}
          >
            {Backdrops.map(({value, name}) => (
              <option className="rounded text-black mx-3 my-0 px-1 text-xs" value={`${value}`}> {name} </option>
            ))}
          </select>
        </div>
      )
    }
  },
  {
    key: 'looks-8',
    type: 'looks',
    originalPos: 18,
    implement: (_, transformProps) => ({
      ...transformProps,
      backdrop: transformProps.backdrop === Backdrops.length - 1 ? 0 : transformProps.backdrop + 1,
    }),
    Component: () => {
      return (
        <div className="flex flex-row flex-wrap justify-center items-center  text-xs">
          Next Backdrop
        </div>
      )
    }
  },
];

export default allData;
