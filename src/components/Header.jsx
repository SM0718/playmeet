import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { useState } from 'react'

function Header() {

    const [number, setNumber] = useState(0)
    const navigate = useNavigate()

    const head = [
        {
            name: "Find Sports",
            slug: "/find-sports"
        },
        {
            name: "Locate Nearby",
            slug: "/locate-nearby"
        },
        {
            name: "Connect",
            slug: "/connect"
        },
        
    ]

  return (
    <div className="w-5/6 mx-auto py-4 flex justify-between items-center">
        <div className='flex gap-10 '>
            <h1 className='text-4xl font-bold font-roboto custom'>PlayMeet</h1>
            {
                head.map((item) => {
                    return <p className='cursor-pointer my-auto' key={item.slug} onClick={() => navigate(`${item.slug}`)}>{item.name}</p>
                })
            }
        </div>
        <div className='flex gap-6'>
            <Button className={"border border-black hover:bg-slate-300 px-4 py-2 rounded-xl"}>Join Us</Button>
            <Button className={"border border-black hover:bg-slate-300 px-4 py-2 rounded-xl"}>Account</Button>
        </div>

    </div>
  )
}

export default Header