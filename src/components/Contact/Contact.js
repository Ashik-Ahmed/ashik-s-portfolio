import React from 'react';
import { ImLocation, ImPhone } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
    return (
        <div className='my-16'>
            <h2 className='text-4xl font-bold'>Contact</h2>

            <div className='container mx-auto md:grid grid-cols-3 gap-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex items-center gap-4'>
                            <div>
                                <span className='text-sky-400 text-4xl'> <ImLocation /></span>
                            </div>
                            <div>
                                <h2 className="card-title">Locate Me</h2>
                                <p>Mohammadpur, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex items-center gap-4'>
                            <div>
                                <span className='text-sky-400 text-4xl'> <ImPhone /></span>
                            </div>
                            <div>
                                <h2 className="card-title">Give Me a call</h2>
                                <p>(+880) 1521464568</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex items-center gap-4'>
                            <div>
                                <span className='text-sky-400 text-4xl'> <HiOutlineMail /></span>
                            </div>
                            <div>
                                <h2 className="card-title">Get in Email</h2>
                                <p>ashikahmed121@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-6 container mx-auto'>
                <form action="">
                    <div className='flex gap-6 w-full mb-4'>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full" />
                    </div>
                    <input type="text" placeholder="Subject" className="input input-bordered w-full mb-4" />
                    <textarea type="text" placeholder="Message" className=" textarea input-bordered w-full mb-4" />
                    <input type="submit" value='Send Message' className='btn btn-info text-white' />
                </form>
            </div>
        </div>
    );
};

export default Contact;