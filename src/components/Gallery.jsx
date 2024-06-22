import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <div className='hidden md:flex flex-col justify-center bg-slate-50 pb-16 pt-10 items-center'>
            <h2 className='text-center text-5xl text-orange-600 font-semibold pb-10'>Gallery</h2>
            <div className='flex w-full flex-col justify-center items-center gap-4 md:px-32 px-5'>
                <div className='flex h-[60vh] w-full gap-4 justify-center items-center'>
                    <div className='w-1/2 flex gap-4 h-full'>
                        <div className='w-1/2 h-full rounded-2xl shadow-md bg-white'>
                            <img src="/img1.jpg" alt="" className='h-full w-full rounded-lg' />
                        </div>
                        <div className='w-1/2 h-full rounded-2xl shadow-md bg-white'>
                            <img src="/img2.jpg" alt="" className='h-full w-full rounded-lg' />
                        </div>
                    </div>
                    <div className='w-1/2 h-[97%] -mt-4 flex flex-col gap-4 '>
                        <div className='w-full h-1/2 flex gap-4 rounded-2xl shadow-md bg-white'>
                            <div className='w-1/2 h-full '>
                                <img src="/img7.jpg" alt="" className='h-full w-full rounded-lg' />
                            </div>
                            <div className='w-1/2 h-full '>
                                <img src="/img3.jpg" alt="" className='h-full w-full rounded-lg' />
                            </div>
                        </div>
                        <div className='w-full h-1/2 rounded-2xl shadow-md bg-white'>
                            <img src="/img4.jpg" alt="" className='h-full w-full rounded-lg' />
                        </div>
                    </div>
                </div>
                <div className='flex h-[35vh] border-red-600 w-full justify-center items-center gap-4'>
                    <div className='w-1/3 h-full rounded-2xl shadow-md bg-white'>
                        <img src="/img5.jpg" alt="" className='h-full w-full rounded-lg' />
                    </div>
                    <div className='w-1/3 h-full rounded-2xl shadow-md bg-white'>
                        <img src="/img6.jpg" alt="" className='h-full w-full rounded-lg' />
                    </div>
                    <div className='w-1/3 h-full rounded-2xl shadow-md bg-white'>
                        <img src="/img7.jpg" alt="" className='h-full w-full rounded-lg' />
                    </div>
                </div>
            </div>
            <div className="w-full pt-10 text-center">
                <Link to='/gallery'
                    className=" px-4 py-2 border-2 border-orange-600 rounded-3xl hover:bg-orange-700 hover:text-white">
                    Learn more
                </Link>
            </div>
        </div>
    )
}

export default Gallery
