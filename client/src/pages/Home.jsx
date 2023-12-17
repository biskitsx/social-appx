import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHeartCircleBolt, faThumbsUp, faHeart, faImage, faFile, faVideo } from '@fortawesome/free-solid-svg-icons'
import Post from '../components/Post';
import { add } from '../store/postReducer';
import { endPoint } from '../store/api'


function Home() {
    const { user } = useSelector((state) => state.user);
    const [title, setTitle] = useState('')
    const [fileName, setFileName] = useState('');
    const dispatch = useDispatch()
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file);
        } else {
            setFileName('');
        }
    };


    const handleButton = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("img", fileName)
            formData.append("title", title)

            const res = await axios.post(`${endPoint}/posts`, formData)
            console.log(res.data)
            dispatch(add(res.data))
            setFileName(null)
            setTitle('')
        } catch (err) {
            console.error(err)
        }
    }





    if (!user) {
        return (
            <div className='grid place-items-center h-screen'>
                <h1 className='text-5xl font-semibold'>Enjoy our website now</h1>
            </div>
        );
    }
    return (
        <Layout>
            <div className='flex gap-6 flex-col'>
                <form className='shadow-md rounded-md bg-white p-6 flex gap-2 flex-col' onSubmit={handleButton}>
                    <div className='flex flex-row items-center gap-3'>
                        <img src={user.picturePath?.url} alt="" className="w-10 h-10 object-cover rounded-full shadow-md" />

                        <input type="text" className='rounded-2xl bg-zinc-100 w-full text-lg outline-none px-2' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className='flex justify-end gap-8 items-center text-zinc-600'>
                        <input type="file" className='hidden' name="file" id="file" onChange={handleFileChange} />
                        {fileName && <label className='cursor-pointer text-green-500'>file: {fileName.name}</label>}
                        <label htmlFor='file' className='cursor-pointer flex items-center gap-1'>
                            <FontAwesomeIcon icon={faImage} />
                            <p>picture</p>
                        </label>
                        <label htmlFor='file' className='cursor-pointer flex items-center gap-1'>
                            <FontAwesomeIcon icon={faFile} />
                            <p>file</p>
                        </label>
                        <label htmlFor='file' className='cursor-pointer flex items-center gap-1'>
                            <FontAwesomeIcon icon={faVideo} />
                            <p>video</p>
                        </label>

                        <button className='bg-blue-500 px-2 text-white rounded-md' type='submit'>Post now</button>
                    </div>
                </form>

                <Post />
            </div>
        </Layout>
    );
}

export default Home;