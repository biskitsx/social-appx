import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/Reducer'
import { useNavigate } from 'react-router-dom'
import { endPoint } from '../store/api'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFisrtName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const naviate = useNavigate()
    const handleButton = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${endPoint}/auth/register`, { email, password, firstName, lastName })
            dispatch(login(res.data))
            localStorage.setItem("user", JSON.stringify(res.data))
            naviate('/')

        } catch (error) {
            setError(error.response.data.message)
            console.log(error.response.data)
        }
    }
    return (
        <div>
            <div className='grid place-items-center h-screen'>
                <form className='shadow-md w-sm flex flex-col p-10 gap-5 text-lg bg-white rounded-md' onSubmit={handleButton}>
                    <h1 className='text-3xl'>Register</h1>
                    <input type="email" placeholder='email' className='border-b-2 outline-none p-1' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' className='border-b-2 outline-none p-1' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder='Fisrt Name' className='border-b-2 outline-none p-1' value={firstName} onChange={(e) => setFisrtName(e.target.value)} />
                    <input type="text" placeholder='Last Name' className='border-b-2 outline-none p-1' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <button className='bg'>Submit</button>
                    {error &&
                        <div className='text-red-600 text-sm text-center'>{error} !</div>
                    }
                </form>
            </div>
        </div>
    )
}

export default Register