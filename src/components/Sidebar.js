import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Sidebar = () => {
  return (
    <div className=" relative grid grid-cols-4">
        <div className=" col-span-1">
          <ul className=" space-y-1 mt-4 w-[20rem] ">
            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-65 hover:border hover:border-white cursor-pointer font-semibold">
            <FontAwesomeIcon icon={icon({name: 'plus', family: 'classic', style: 'solid'})} />
              <p>New flow</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl hover:border hover:border-white cursor-pointer font-bold">
            <FontAwesomeIcon icon={icon({name: 'envelope', family: 'classic', style: 'solid'})}/>
              <p>Coffee?</p>
              <span className=" text-slate-500">Marisa Lu</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-65 hover:border hover:border-white cursor-pointer font-semibold">
            <FontAwesomeIcon icon={icon({name: 'envelope', family: 'classic', style: 'solid'})}/>
              <p>Feedback</p>
              <span className=" text-slate-500">Lindsey Weiss</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-60 hover:border hover:border-white cursor-pointer font-semibold">
            <FontAwesomeIcon icon={icon({name: 'envelope', family: 'classic', style: 'solid'})}/>
              <p>Post-grad plans</p>
              <span className=" text-slate-500">Enelyn Ma</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-55 hover:border hover:border-white cursor-pointer font-semibold">
            <FontAwesomeIcon icon={icon({name: 'envelope', family: 'classic', style: 'solid'})}/>
              <p>Launch plan</p>
              <span className=" text-slate-500">Dennis jin</span>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-45 hover:border hover:border-white cursor-pointer font-semibold">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/24/facebook-messenger--v1.png"
                alt="facebook-messenger--v1"
              />
              <p>Victoria Wang</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-40 hover:border hover:border-white cursor-pointer font-semibold">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/24/facebook-messenger--v1.png"
                alt="facebook-messenger--v1"
              />
              <p>Advait Kalakkad</p>
            </li>

            <li className=" flex gap-2 hover:bg-slate-100 p-4 rounded-2xl opacity-30 hover:border hover:border-white cursor-pointer font-semibold">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/24/twitter--v1.png"
                alt="twitter--v1"
              />
              <p>Danny Trinh</p>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar;