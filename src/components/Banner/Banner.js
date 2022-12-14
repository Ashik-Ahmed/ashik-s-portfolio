import React from 'react';
import Typical from 'react-typical';
import { HiDocumentText } from 'react-icons/hi';

const Banner = () => {
    return (
        <div>
            <div className='md:grid grid-cols-3 items-center'>
                <div className='flex flex-col justify-start text-left md:ml-24'>
                    <h2 className='text-5xl font-mono text-sky-400 mb-2'>Hi, I'm <span className='text-pink-500 font-extrabold border-sky-500 underline decoration-sky-500'>Ashik</span></h2>
                    <Typical
                        className='text-xl font-semibold font-mono text-pink-500'
                        steps={[
                            'Web Developer', 1000,
                            'Full Stack Developer', 1000,
                            'Tech Passionate', 1000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />

                    <div className='text-center md:mt-32'>
                        <a href='https://drive.google.com/file/d/1GdkNWggyO0Hc8Ik1y1cQ3rgj5Ki2Q1hY/view?usp=sharing' target='_blank' className='btn border-0 btn-sm normal-case text-lg bg-sky-400 hover:bg-sky-500 transform hover:-translate-y-2 text-white shadow-sky-300 shadow-lg px-4' rel="noreferrer"><span className='flex items-center gap-2'><HiDocumentText />Resume</span></a>
                    </div>

                    <div className='flex flex-wrap justify-center gap-2 mt-4'>
                        <a href='https://www.facebook.com/ashik.ahmed007' target='_blank' class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded shadow-blue-400 shadow-lg transform transition-transform hover:-translate-y-1" rel="noreferrer">
                            <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>

                        <a href='https://www.linkedin.com/in/ashikahmed121' target='_blank' class="bg-blue-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded shadow-blue-600 shadow-lg transform transition-transform hover:-translate-y-1" rel="noreferrer">
                            <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                            </svg>
                        </a>

                        <a href='https://github.com/Ashik-Ahmed' target='_blank' class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded shadow-gray-600 shadow-lg transform transition-transform hover:-translate-y-1" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/hCts3w5/no-bg-title-dbcea04ced33eb7d4bb2.png" alt="" />
                </div>
                <div className='flex flex-col'>
                    <img className='w-44 mask mask-hexagon bg-gray-400 p-4 shadow-md' src="https://i.ibb.co/B6znDT5/react.png" alt="" />
                    <img className='w-48 mask mask-hexagon bg-gray-400 p-3 shadow-md  ml-16 -mt-6' src="https://i.ibb.co/5Gfk5Lj/mongodb.png" alt="" />
                    <img className='w-40 mask mask-hexagon bg-gray-400 p-4 shadow-md  -mt-7' src="https://i.ibb.co/xs0HFwW/nodejs.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;