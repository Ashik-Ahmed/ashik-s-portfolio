import React from 'react';
import './works.css';

const Works = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-sky-500'>My Works</h2>

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
                                <span class="block text-lg text-sky-500 font-bold tracking-wide">Book a flight</span>
                                <span class="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                </span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
                            <div class="pt-8 text-center">
                                <label htmlFor="my-modal-5" className="bg-sky-400 hover:bg-sky-500 text-white font-bold btn border-0">View Details</label>
                            </div>
                        </div>

                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl bg-sky-400">
                                <label htmlFor="my-modal-5" className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                <span class="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                </span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
                            <div class="pt-8 text-center">
                                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="py-4">
                    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div>
                            <div class="w-full image-cover rounded-t-md" >
                                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                <span class="block text-lg text-gray-800 font-bold tracking-wide">Book a flight</span>
                                <span class="block text-gray-600 text-sm">Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                </span>
                            </div>
                        </div>
                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span>
                            <div class="pt-8 text-center">
                                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Works;