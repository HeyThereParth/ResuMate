import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { useUser, UserButton } from '@clerk/clerk-react'


function Header() {
const {user, isSignedIn} = useUser();

  return (
    <div className=' px-5 flex justify-between shadow-md bg-gradient-to-r from-indigo-500 to-purple-600'>
        <img src="/resume-png.png" width={50} height={80} alt="" />
        {isSignedIn ?
            <div className='flex gap-2 items-center'>
                <Link to = {'/dashboard'} >
                <Button variant = "outline" className="px-3 text-sm rounded-md" size = "sm">Dashboard</Button>
                </Link>
                <UserButton/>
            </div>:
            <div className='flex gap-2 items-center'>
            <Link to = {'/auth/sign-in'}>
        <Button variant = "outline" className="px-3 text-sm rounded-md " size = "sm">Get Started</Button>
        </Link>
        </div>
        }
          
    </div>
  )
}

export default Header