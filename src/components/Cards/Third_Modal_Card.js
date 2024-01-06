import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import map from './../../assets/map.png'

const Third_Modal_Card = () => {
  return (
    <div className=" w-[36rem] max-h-[35rem] shadow-md bg-white  rounded-2xl overflow-hidden text-sm">
    <div className=" flex justify-between p-2 bg-slate-200">
      <div className=" flex space-x-3">
      <FontAwesomeIcon icon={icon({name: 'location-dot', family: 'classic', style: 'solid'})} className=""/> <span className=" font-semibold">Philz Coffee?</span>
        <input className=" text-slate-400  outline-none bg-transparent" placeholder="Location"/>
      </div>
      <FontAwesomeIcon icon={icon({name: 'microphone', family: 'classic', style: 'solid'})} className=" cursor-pointer" />
    </div>
    <img src={map} alt="map"/>
      <div className=" space-y-4 p-4">
        <h1 className=" font-bold text-2xl">Philz Coffee</h1>
        <p className="">Custom-blended java in a casual setting.</p>
        <div>
          <p className=" text-slate-400" >20686 Stevens Creek Bivd</p>
          <p className=" text-slate-400" >Cupertino, CA 95014</p>
        </div>
        <div className=" flex  space-x-2 border-t pt-3">
        <button className=" font-semibold text-slate-600 text-xs bg-slate-200 hover:bg-slate-300 py-2 px-6 rounded-3xl">
          <div className=" flex gap-2 items-center">
          <FontAwesomeIcon icon={icon({name: 'location-arrow', family: 'classic', style: 'solid'})} />
            <div><p className=" font-bold text-l">Get directions</p>
          <p className=" text-xs text-slate-400">Requires your location</p></div>
          </div>

        </button>
        <button className=" font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 py-3 px-5 rounded-3xl">
          See details
        </button>
        <button className=" font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 py-3 px-5 rounded-3xl">
          Find more cafes nearby
        </button>
      </div>
      </div>

      
      <p className=" flex gap-3 p-6">
      <FontAwesomeIcon icon={icon({name: 'crosshairs', family: 'classic', style: 'solid'})} className=" text-slate-400"/>
        <span className=" text-slate-400">More action</span>
      </p>
    
  </div>
  )
}

export default Third_Modal_Card