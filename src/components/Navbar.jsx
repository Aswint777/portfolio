import React from 'react'

function Navbar() {
  return (
     <nav className="w-full bg-black text-white px-10 py-5 flex justify-between items-center fixed top-0 left-0 z-50">
      
      <h1 className="text-3xl font-bold tracking-wide">
        Aswin
      </h1>

      <ul className="flex gap-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-gray-400 transition duration-300">
          About
        </li>

        <li className="cursor-pointer hover:text-gray-400 transition duration-300">
          Skills
        </li>

        <li className="cursor-pointer hover:text-gray-400 transition duration-300">
          Projects
        </li>

        <li className="cursor-pointer hover:text-gray-400 transition duration-300">
          Contacts
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
