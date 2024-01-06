import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const Second_Modal_Card = () => {
  return (
    <div className="w-[36rem]  h-[35rem] shadow-md bg-white  rounded-2xl overflow-hidden text-sm">
    <div className=" flex justify-between p-2 bg-slate-200">
      <h1 className=" font-semibold">See my available: today</h1>
      <FontAwesomeIcon icon={icon({name: 'microphone', family: 'classic', style: 'solid'})} className=" cursor-pointer" />
    </div>
    <div className=" space-y-4 p-4">
      <h1 className=" text-3xl font-bold">Available until 1 PM</h1>

      <p className=" font-medium text-black">
        Would you like to create an event for Coffee with Marisa at 11 AM?
      </p>

      <div className=" bg-slate-100 rounded-2xl  grid grid-cols-5 gap-6  ">
       <div className=" col-span-1 space-y-2">
        <div  className=" h-12 flex justify-center items-center">
        <h1>9:41 AM</h1>
        </div>
       <div className=" h-12 flex justify-center">
       <h1 className=" text-slate-400">11 AM</h1>
       </div>
        <div className=" h-20 flex justify-center text-slate-400">
        <h1 >1 AM</h1>
        </div>
        <div className=" h-12 flex justify-center text-slate-400">
        <h1 >3 AM</h1>
        </div>
       </div>
        <div className=" col-span-4 space-y-3 ">
          <div className="border-l-[4px] border-l-slate-500  border border-dotted">
            
          <div className=" relative h-12 flex justify-center">
              <div className=" absolute w-full flex items-center left-[-5px] top-[50%] translate-y-[-50%] ">
              <div className=" h-[7px] w-[7px] rounded-full bg-slate-500 "></div>
              <div className=" h-[1px] af w-full bg-slate-400"></div>
              </div>
              </div>
              <div className=" flex justify-center items-center h-12 bg-blue-200">
                  <div className=" flex gap-6">
                  <h1>Coffee with Marisa</h1>
                  <p className=" text-slate-500">Philiz Coffee</p>
                  </div>
              </div>
          </div>
            <div className=" h-20 flex justify-center items-center gap-6 bg-slate-300 border-4">
              <h1>Meeting with Danny Trinh</h1>
              <p className=" text-slate-500">Mars Lanch</p>

            </div>
         
        </div>
      </div>

      <div className=" flex  space-x-2 border-t pt-6">
        <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-3xl py-3 px-5">
          Create Event
        </button>
        <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-3xl py-3 px-5">
          Edit Event
        </button>
        <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-3xl py-3 px-5">
          Full Calender
        </button>
        <button className=" font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-3xl py-3 px-5">
          Dismiss
        </button>
      </div>
      <p className=" flex gap-3">
      <FontAwesomeIcon icon={icon({name: 'crosshairs', family: 'classic', style: 'solid'})} className=" text-slate-400"/>
        <span className=" text-slate-400">More action</span>
      </p>
    </div>
  </div>
  )
}

export default Second_Modal_Card