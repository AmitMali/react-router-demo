import React from 'react'
import { Link } from 'react-router-dom'

const menus=[
    {
        name:'Home',
        path:'/',
    },
    {
        name:'Users',
        path:'/users',
    }
]
const Navbar = () => {
  return (
    <div className="p-4 grid grid-flow-col grid-cols-3 ">
        
            <h2 className="text-red-400">logo</h2>
        <ul className="">
        {
            menus.map((menu)=>(
                <li className="" key={menu.path}> 
                    <Link to={menu.path}>{menu.name}</Link>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Navbar   