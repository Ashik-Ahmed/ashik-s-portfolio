import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import './works.css';
import gearupHome from '../../assets/gearup/home.png';
import gearupManageOrder from '../../assets/gearup/manage-order.png';
import gearupMyOrder from '../../assets/gearup/my-order.png';
import gearupProfile from '../../assets/gearup/profile.png';
import gearupPurchase from '../../assets/gearup/purchase.png';

import manageWareHome from '../../assets/manageware/home.png';
import manageWareDetails from '../../assets/manageware/details.png';
import manageWareInventory from '../../assets/manageware/inventory.png';
import manageWareUpdate from '../../assets/manageware/update.png';

const Works = () => {
    return (
        <div className='mt-14' id='works'>
            <h2 className='my-6 text-4xl font-bold text-sky-500'>My Works</h2>

            <div className='grid md:grid-cols-3'>
                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-sky-300 rounded-full text-white float-right fd-cl opacity-90 group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> Full</span>
                                    <span class="text-xs tracking-wide font-bold block font-sans">Stack</span>
                                </div>
                            </div>
                            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-sky-500 font-bold tracking-wide">Gear Up (E-commerce)</span>
                                <span class="block text-gray-600 text-sm text-left italic">Gear Up is an ecommerce website selling motorbike accessories. Customer can purchase accessories at wholesale price. Customer also need to follow a minimum buy quantity.</span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Gear Up <br /> (E-commerce)</span>
                            <div class="pt-8 text-center">
                                <label htmlFor="gearup-modal" className="bg-sky-400 hover:bg-sky-500 text-white font-bold btn border-0">View Details</label>
                            </div>
                        </div>

                        <input type="checkbox" id="gearup-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-6xl bg-gray-200">
                                <label htmlFor="gearup-modal" className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white btn-circle border-0 absolute right-2 top-2">✕</label>
                                <div className='grid md:grid-cols-2 gap-8'>
                                    <div>
                                        <div className="carousel w-full">
                                            <div id="gearup-slide1" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-full lg:h-full h-64 object-cover object-center rounded" src={gearupHome} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#gearup-slide5" className="btn btn-info bg-transparent btn-circle">❮</a>
                                                    <a href="#gearup-slide2" className="btn btn-info bg-transparent btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="gearup-slide2" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto rounded" src={gearupProfile} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#gearup-slide1" className="btn btn-info bg-transparent btn-circle">❮</a>
                                                    <a href="#gearup-slide3" className="btn btn-info bg-transparent btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="gearup-slide3" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto rounded" src={gearupPurchase} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#gearup-slide2" className="btn btn-info bg-transparent btn-circle">❮</a>
                                                    <a href="#gearup-slide4" className="btn btn-info bg-transparent btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="gearup-slide4" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto object-cover object-center rounded" src={gearupMyOrder} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#gearup-slide3" className="btn btn-info bg-transparent btn-circle">❮</a>
                                                    <a href="#gearup-slide5" className="btn btn-info bg-transparent btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="gearup-slide5" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto object-cover object-center rounded" src={gearupManageOrder} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#gearup-slide4" className="btn btn-info bg-transparent btn-circle">❮</a>
                                                    <a href="#gearup-slide1" className="btn btn-info bg-transparent btn-circle">❯</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left'>
                                        <h3 className="font-bold text-2xl">Gear Up (E-commerce website)</h3>
                                        <div className='flex gap-3 mt-4'>
                                            <a href='https://gear-up-a7b20.web.app/' target='_blank' className='btn btn-xs btn-info flex gap-1 normal-case text-white' rel="noreferrer"><HiExternalLink />Visit</a>
                                            <a href='https://github.com/Ashik-Ahmed/gear-up-e-commerce' target='_blank' className='btn btn-xs  flex gap-1 normal-case text-white' rel="noreferrer"><AiFillGithub />Client</a>
                                            <a href='https://github.com/Ashik-Ahmed/gear-up-e-commerce-server' target='_blank' className='btn btn-xs flex gap-1 normal-case text-white' rel="noreferrer"><AiFillGithub />Server</a>
                                        </div>
                                        <p className="py-4">Gear Up is an ecommerce website selling motorbike accessories. Customer can purchase accessories at wholesale price. Customer also need to follow a minimum buy quantity.</p>
                                        <div>
                                            <p className='font-bold'>Features</p>
                                            <div className='flex'>
                                                <div>
                                                    <p className='font-semibold'>Admin User:</p>
                                                    <ul className='list-disc italic'>
                                                        <li className='ml-10'>Manage Products (View Details, Insert, Update, Delete)</li>
                                                        <li className='ml-10'>Cancel Any unpaid order and Change the shipment status of paid orders</li>
                                                        <li className='ml-10'>View all order history with order detail</li>
                                                        <li className='ml-10'>Can view all user data and make any normal user to an Admin user</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className='font-semibold'>Regular User:</p>
                                                    <ul className='list-disc italic'>
                                                        <li className='ml-10'>View Products and Make Purchase</li>
                                                        <li className='ml-10'>View Order details and Cancel any order before payment</li>
                                                        <li className='ml-10'>Make payment using Stripe</li>
                                                        <li className='ml-10'>Can see all order history</li>
                                                        <li className='ml-10'>Update Profile information</li>
                                                        <li className='ml-10'>Can add review and it will be shown in the website review section</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='font-bold mt-4'>Technology</p>
                                            <div>
                                                <span className='bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>React.js</span>
                                                <span className='bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Tailwind CSS</span>
                                                <span className='bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Firebase Authentication</span>
                                                <span className='bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Stripe</span> <br />
                                                <span className='bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Mongo DB</span>
                                                <span className='bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Express.js</span>
                                                <span className='bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>JSON Web Token (JWT)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-sky-300 rounded-full text-white float-right fd-cl opacity-90 group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> Full</span>
                                    <span class="text-xs tracking-wide font-bold block font-sans">Stack</span>
                                </div>
                            </div>
                            <div class="py-8 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-sky-500 font-bold tracking-wide">Quizzie (Online Exam Web-App)</span>
                                <span class="block text-gray-600 text-sm text-left italic px-4">An online platform to take exams and prepare yourself for jobs. Interesting part is, 80% or higher marks achievers will get 5 bonus points whick can  be used to retake exams. Also this will cheer up the examinee.</span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="text-3xl font-bold text-white leading-relaxed font-sans">Quizzie <br /> (Online Exam Web-App)</span>
                            <div class="pt-8 text-center">
                                <label htmlFor="quizzie-modal" className="bg-sky-400 hover:bg-sky-500 text-white font-bold btn border-0">View Details</label>
                            </div>
                        </div>

                        <input type="checkbox" id="quizzie-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-6xl bg-gray-200">
                                <label htmlFor="quizzie-modal" className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white btn-circle border-0 absolute right-2 top-2">✕</label>
                                <div className='grid md:grid-cols-2 gap-8'>
                                    <div>
                                        <div className="carousel w-full">
                                            <div id="quizzie-slide1" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-full lg:h-full h-64 object-cover object-center rounded" src="https://placeimg.com/400/400/arch" />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#quizzie-slide4" className="btn btn-circle">❮</a>
                                                    <a href="#quizzie-slide2" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="quizzie-slide2" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-full lg:h-auto h-64 object-cover object-center rounded" src="https://placeimg.com/400/400/arch" />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#quizzie-slide1" className="btn btn-circle">❮</a>
                                                    <a href="#quizzie-slide3" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="quizzie-slide3" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-full lg:h-auto h-64 object-cover object-center rounded" src="https://placeimg.com/400/400/arch" />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#quizzie-slide2" className="btn btn-circle">❮</a>
                                                    <a href="#quizzie-slide4" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="quizzie-slide4" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-full lg:h-auto h-64 object-cover object-center rounded" src="https://placeimg.com/400/400/arch" />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#quizzie-slide3" className="btn btn-circle">❮</a>
                                                    <a href="#quizzie-slide1" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left'>
                                        <h3 className="font-bold text-2xl">Quizzie (Online Exam Web-App)</h3>
                                        <div className='flex gap-3 mt-4'>
                                            <a href='https://quizzie-d2205.web.app/' target='_blank' className='btn btn-xs btn-info flex gap-1 normal-case text-white' rel="noreferrer"><HiExternalLink />Visit</a>
                                            <a href='https://github.com/Ashik-Ahmed/quizzie' target='_blank' className='btn btn-xs  flex gap-1 normal-case text-white' rel="noreferrer"><AiFillGithub />Client</a>
                                            <a href='https://github.com/Ashik-Ahmed/quizzie-server' target='_blank' className='btn btn-xs flex gap-1 normal-case text-white' rel="noreferrer"><AiFillGithub />Server</a>
                                        </div>
                                        <p className="py-4">An online platform to take exams and prepare yourself for jobs. Interesting part is, 80% or higher marks achievers will get 5 bonus points whick can  be used to retake exams. Also this will cheer up the examinee.</p>
                                        <div>
                                            <p className='font-bold'>Features</p>
                                            <ul className='list-disc italic'>
                                                <li className='ml-10'>Registered user can take MCQ exam on different topics</li>
                                                <li className='ml-10'>Users can take only one exam on each topic in the same day</li>
                                                <li className='ml-10'>80% or higher marks ensuring examinee will get 5 bonus points</li>
                                                <li className='ml-10'>Bonus points can be used to retake multiple exams</li>
                                                <li className='ml-10'>User can see the exam result statistics on Dashboard in Charts</li>
                                                <li className='ml-10'>Admin user can set questions on different topics</li>
                                            </ul>

                                        </div>
                                        <div>
                                            <p className='font-bold mt-4'>Technology</p>
                                            <div>
                                                <span className=' bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>React.js</span>
                                                <span className=' bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Next.js</span>
                                                <span className=' bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Tailwind CSS</span>
                                                <span className=' bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Firebase Authentication</span> <br />
                                                <span className=' bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Mongo DB</span>
                                                <span className=' bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>Express.js</span>
                                                <span className=' bg-sky-400 px-2 py-1 my-1 inline-block text-white rounded mr-2'>JSON Web Token (JWT)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-sky-300 rounded-full text-white float-right fd-cl opacity-90 group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> Full</span>
                                    <span class="text-xs tracking-wide font-bold block font-sans">Stack</span>
                                </div>
                            </div>
                            <div class="py-8 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-sky-500 font-bold tracking-wide">ManageWare (Warehouse Management)</span>
                                <span class="block text-gray-600 text-sm text-left italic px-4">It,s a complete web application to manage your warehouse. You can insert new products. Update the existing and delete products as well. Logged in users will see the products added by him seperately.</span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="text-3xl font-bold leading-relaxed text-white font-sans">ManageWare <br /> (Warehouse Management)</span>
                            <div class="pt-8 text-center">
                                <label htmlFor="manageware-modal" className="bg-sky-400 hover:bg-sky-500 text-white font-bold btn border-0">View Details</label>
                            </div>
                        </div>

                        <input type="checkbox" id="manageware-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-6xl bg-gray-200">
                                <label htmlFor="manageware-modal" className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white btn-circle border-0 absolute right-2 top-2">✕</label>
                                <div className='grid md:grid-cols-2 gap-8'>
                                    <div>
                                        <div className="carousel w-full">
                                            <div id="manageware-slide1" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto object-cover object-center rounded" src={manageWareHome} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#manageware-slide4" className="btn btn-circle">❮</a>
                                                    <a href="#manageware-slide2" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="manageware-slide2" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto object-cover object-center rounded" src={manageWareInventory} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#manageware-slide1" className="btn btn-circle">❮</a>
                                                    <a href="#manageware-slide3" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="manageware-slide3" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto object-cover object-center rounded" src={manageWareDetails} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#manageware-slide2" className="btn btn-circle">❮</a>
                                                    <a href="#manageware-slide4" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="manageware-slide4" className="carousel-item relative w-full">
                                                <img alt="ecommerce" class="w-fit h-fit my-auto object-cover object-center rounded" src={manageWareUpdate} />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                    <a href="#manageware-slide3" className="btn btn-circle">❮</a>
                                                    <a href="#manageware-slide1" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-left transform'>
                                        <h3 className="font-bold text-2xl">ManageWare (Warehouse Management)</h3>
                                        <div className='flex gap-3 mt-4'>
                                            <a href='https://manageware-40e96.web.app/' target='_blank' className='btn btn-xs btn-info flex gap-1 normal-case text-white' rel="noreferrer"><HiExternalLink />Visit</a>
                                            <a href='https://github.com/Ashik-Ahmed/manageware' target='_blank' className='btn btn-xs  flex gap-1 normal-case text-white' rel="noreferrer"><AiFillGithub />Client</a>
                                            <a href='https://github.com/Ashik-Ahmed/manageware-server' target='_blank' className='btn btn-xs flex gap-1 normal-case text-white' rel="noreferrer"><AiFillGithub />Server</a>
                                        </div>
                                        <p className="py-4">It,s a complete web application to manage your warehouse. You can insert new products. Update the existing and delete products as well. Logged in users will see the products added by him seperately.</p>
                                        <div>
                                            <p className='font-bold'>Features</p>
                                            <ul className='list-disc italic'>
                                                <li className='ml-10'>Signup and Login with email and password as well as social login using Google</li>
                                                <li className='ml-10'>Inventory page will list all products in tabular form.</li>
                                                <li className='ml-10'>Functional Details, Update and Delete button is available for each product in the Inventory section</li>
                                                <li className='ml-10'>Logged in user can also add any product to the inventory.</li>
                                                <li className='ml-10'>User can see the list of products added by them separately in My Items page.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className='font-bold mt-4'>Technology</p>
                                            <div>
                                                <p className='inline-block bg-sky-400 px-2 text-white py-1 rounded my-1 mr-2'>React.js</p>
                                                <p className='inline-block bg-sky-400 px-2 text-white py-1 rounded my-1 mr-2'>Tailwind CSS</p>
                                                <p className='inline-block bg-sky-400 px-2 text-white py-1 rounded my-1 mr-2'>Firebase Authentication</p>
                                                <p className='inline-block bg-sky-400 px-2 text-white py-1 rounded my-1 mr-2'>REST API</p> <br />
                                                <p className='inline-block bg-sky-400 px-2 text-white py-1 rounded my-1 mr-2'>Mongo DB</p>
                                                <p className='inline-block bg-sky-400 px-2 text-white py-1 rounded my-1 mr-2'>Express.js</p>
                                                <p className='inline-block bg-sky-400 px-2 text-white py-1 rounded my-1 mr-2'>JSON Web Token (JWT)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Works;