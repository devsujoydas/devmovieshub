import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul className="flex md:flex-row flex-col justify-center md:items-center flex-wrap md:gap-1 gap-5 md:text-lg">
            <NavLink className="hover:text-[#FF014F] px-3 py-2 rounded-md duration-500 transition-all" to="/">Home</NavLink>
            <NavLink className="hover:text-[#FF014F] px-3 py-2 rounded-md duration-500 transition-all" to="/movies">Movies & Shows</NavLink>
            <NavLink className="hover:text-[#FF014F] px-3 py-2 rounded-md duration-500 transition-all" to="/support">Support</NavLink>
            <NavLink className="hover:text-[#FF014F] px-3 py-2 rounded-md duration-500 transition-all" to="/subscriptions">Subscriptions</NavLink>
          </ul>
    </div>
  )
}

export default Nav