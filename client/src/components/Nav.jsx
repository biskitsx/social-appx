import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login, logout } from '../store/Reducer'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { endPoint } from '../store/api'

function Nav() {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleButton = async (e) => {
        e.preventDefault()
        localStorage.clear()
        dispatch(logout())
        const res = await axios.get(`${endPoint}/api/auth/logout`)
        // redirect to login page
        window.location.href = "/login"
    }
    useEffect(() => {
        const userInfo = localStorage.getItem("user")
        const objUser = JSON.parse(userInfo)
        dispatch(login(objUser))
    }, [])

    return (
        <div className='shadow-md center-col py-4 fixed top-0 w-full bg-blue-900 z-10'>
            <div className='container center-row justify-between'>
                <Link to='/' className='text-white text-2xl font-semibold tracking-wide'>socialmedia 🧃 </Link>
                {user &&
                    <div className='flex gap-4 items-center'>
                        <div className='flex items-center gap-2'>
                            <p className='rounded-md font-medium text-white px-2'>
                                {user.firstName} {user.lastName}
                            </p>
                            <img src={user.picturePath?.url} alt="" className="w-10 h-10 object-cover rounded-full shadow-md" />

                        </div>
                        <button onClick={handleButton} className='text-white'>Log out</button>
                    </div>
                }
                {!user &&
                    <div className='flex gap-5 text-white'>
                        <Link to='/register'>Sign up</Link>
                        <Link to='/login'>Log in</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Nav