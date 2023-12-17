import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/Reducer';
import axios from 'axios';
import { endPoint } from '../store/api';

function Setting() {
    const { user } = useSelector((state) => state.user);
    const [firstName, setFirstName] = useState(user?.firstName)
    const [lastName, setLastName] = useState(user?.lastName)
    const [location, setLocation] = useState(user?.location)
    const [occupation, setOccupation] = useState(user?.occupation)
    const [img, setImg] = useState(null)
    const dispatch = useDispatch()
    const handleButton = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('img', img)
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('location', location)
        formData.append('occupation', occupation)
        const res = await axios.put(`${endPoint}/users`, formData)
        dispatch(login(res.data))
    }
    return (
        <Layout>
            <form className='shadow-md rounded-md bg-white p-6 flex gap-2 flex-col text-zinc-700' onSubmit={handleButton}>
                <h1 className='text-2xl'>Setting</h1>
                <div className='flex gap-4'>
                    <label className='text-zinc-700'>first name</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className='px-2 border-b-2' />
                </div>
                <div className='flex gap-4'>
                    <label className='text-zinc-700'>last name</label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className='px-2 border-b-2' />
                </div>
                <div className='flex gap-4'>
                    <label className='text-zinc-700'>occupation</label>
                    <input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} className='px-2 border-b-2' />
                </div>
                <div className='flex gap-4'>
                    <label className='text-zinc-700'>location</label>
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} className='px-2 border-b-2' />
                </div>
                <div className='flex gap-4'>
                    <label className='text-zinc-700 w-full border-2 text-center p-5 cursor-pointer' htmlFor='img'>Upload profile image</label>
                    <input type="file" className='hidden' id='img' onChange={e => setImg(e.target.files[0])} />
                    {img && <img src={URL.createObjectURL(img)} alt="" className='w-20 h-20 object-cover' />}
                </div>
                <button className='bg-blue-500 text-white py-2 rounded-md ' type='submit'>Update</button>
            </form>
        </Layout>
    )
}

export default Setting