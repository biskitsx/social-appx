import React, { useEffect } from 'react'
import Nav from './Nav'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faGear, faLocation } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { login } from '../store/Reducer'
function Layout({ children }) {
    const { user } = useSelector((state) => state.user)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     console.log("hi")
    //     const userInfo = localStorage.getItem("user")
    //     const objUser = JSON.parse(userInfo)
    //     dispatch(login(objUser))
    // }, [])

    return (
        <div className='w-lg mx-auto mt-20 flex flex-row gap-6 py-6'>
            <div className='w-4/12 '>
                <div className='bg-white shadow-md rounded-md p-6 flex gap-2 flex-col'>
                    <div className='flex flex-row relative gap-3'>
                        <img src={user?.picturePath?.url} alt="" className='w-14 h-14 object-cover rounded-full shadow-md' />
                        <div>
                            {/* <h1 className='text-lg'>{user.firstName} {user.lastName}</h1> */}
                            <Link className='text-lg' to='/#'>{user && `${user.firstName} ${user.lastName}`}</Link>

                            <p className='text-sm text-zinc-600'>friends : 3</p>
                        </div>
                        <Link to='/setting' className='absolute top-2 right-2'><FontAwesomeIcon icon={faGear} /></Link>
                    </div>
                    <div className='border'></div>
                    <div className='flex flex-col text-sm gap-2 text-zinc-600'>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='w-5 text-center'>
                                <FontAwesomeIcon icon={faLocation} className='' />

                            </div>
                            <p>{user.location ? user.location : "none"}</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='w-5 text-center'>
                                <FontAwesomeIcon icon={faBagShopping} />

                            </div>

                            <p>{user.occupation ? user.occupation : "none"}</p>
                        </div>
                    </div>
                    <div className='border'></div>
                    <div className='text-zinc-600 flex flex-col gap-1'>
                        <h1>Social Media</h1>
                        <div className='flex text-lg gap-3'>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-8/12'>
                {children}
            </div>

            {/* <div className='w-3/12'>
                asdf
            </div> */}

        </div >
    )
}

export default Layout