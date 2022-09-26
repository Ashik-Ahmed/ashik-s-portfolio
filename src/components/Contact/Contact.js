import React, { useRef } from 'react';
import { ImLocation, ImPhone } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const email = e.target.email.value;
        // const subject = e.target.subject.value;
        // const message = e.target.message.value;


        emailjs.sendForm('service_dcch1lq', 'template_n1myfln', form.current, 'T00TwejzqkVHjfVU1')
            .then((result) => {
                console.log(result.text);
                toast.success('We have received your message')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='my-8'>
            <h2 className='mt-6 mb-10 text-4xl font-bold text-sky-500'>Contact</h2>

            <div className='container mx-auto md:grid grid-cols-3 gap-12'>
                <div className="card w-96 bg-base-100 shadow-lg">
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
                <div className="card w-96 bg-base-100 shadow-lg">
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
                <div className="card w-96 bg-base-100 shadow-lg">
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
                <form ref={form} onSubmit={sendEmail}>
                    <div className='flex gap-6 w-full mb-4'>
                        <input name='user_name' type="text" placeholder="Full Name" className="input input-bordered w-full" required />
                        <input name='user_email' type="email" placeholder="Email Address" className="input input-bordered w-full" required />
                    </div>
                    <input name='subject' type="text" placeholder="Subject" className="input input-bordered w-full mb-4" required />
                    <textarea name='message' type="text" placeholder="Message" className=" textarea input-bordered w-full mb-4" required />
                    <input type="submit" value='Send Message' className='btn btn-info text-white' />
                </form>
            </div>
        </div>
    );
};

export default Contact;