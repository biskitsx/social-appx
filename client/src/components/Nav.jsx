import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, logout } from '../store/Reducer'
import axios from 'axios'

function Nav() {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleButton = async (e) => {
        e.preventDefault()
        localStorage.clear()
        dispatch(logout())
        const res = await axios.get("http://localhost:3000/api/auth/logout")
    }
    useEffect(() => {
        const userInfo = localStorage.getItem("user")
        const objUser = JSON.parse(userInfo)
        dispatch(login(objUser))
    }, [])

    return (
        <div className='shadow-md center-col py-4 fixed top-0 w-full bg-white z-10'>
            <div className='w-lg center-row justify-between'>
                <Link to='/' className='text-blue-500 text-2xl font-semibold tracking-wide'>KITKAT⚡️</Link>
                {user &&
                    <div className='flex gap-4 items-center'>
                        <div className='flex items-center gap-2'>
                            <p className='rounded-md text-blue-500 px-2'>
                                {user.firstName} {user.lastName}
                            </p>
                            <img src={user.picturePath.url} alt="" className="w-10 h-10 object-cover rounded-full shadow-md" />

                        </div>
                        <button onClick={handleButton}>Log out</button>
                    </div>
                }
                {!user &&
                    <div className='flex gap-5'>
                        <Link to='/register'>Sign up</Link>
                        <Link to='/login'>Log in</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Nav