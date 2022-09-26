import React from 'react';
import './styles.css';
import css from '../../assets/css3.png';
import html from '../../assets/html5.png';
import bootstrap from '../../assets/bootstrap.png';
import es6 from '../../assets/es6.png';
import express from '../../assets/express.png';
import firebase from '../../assets/firebase.png';
import git from '../../assets/git.png';
import heroku from '../../assets/heroku.png';
import javascript from '../../assets/javascript.png';
import jwt from '../../assets/jwt.png';
import mongodb from '../../assets/mongodb.png';
import nodejs from '../../assets/nodejs.png';
import react from '../../assets/react.png';
import stripe from '../../assets/stripe.png';
import tailwind from '../../assets/tailwind.png';
import vscode from '../../assets/vscode.png';

const Skills = () => {
    return (
        <div className='my-8'>
            <h3 className='mt-6 mb-10 text-4xl font-bold text-sky-500'>My Skills</h3>
            <div className='container mx-auto grid md:grid-cols-4 gap-6'>
                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={html} alt="" />
                    <p className='text-2xl font-bold'>HTML5</p>
                </div>


                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={css} alt="" />
                    <p className='text-2xl font-bold'>CSS3</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={bootstrap} alt="" />
                    <p className='text-2xl font-bold'>Bootstrap</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={tailwind} alt="" />
                    <p className='text-2xl font-bold'>Tailwind</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={javascript} alt="" />
                    <p className='text-2xl font-bold'>JavaScript</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={es6} alt="" />
                    <p className='text-2xl font-bold'>ES6</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={react} alt="" />
                    <p className='text-2xl font-bold'>REACT JS</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={nodejs} alt="" />
                    <p className='text-2xl font-bold'>Node JS</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={express} alt="" />
                    <p className='text-2xl font-bold'>Express JS</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={mongodb} alt="" />
                    <p className='text-2xl font-bold'>Mongo DB</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={stripe} alt="" />
                    <p className='text-2xl font-bold'>Stripe</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-10' src={firebase} alt="" />
                    <p className='text-2xl font-bold'>Firebase Auth</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={jwt} alt="" />
                    <p className='text-2xl font-bold'>JWT</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={vscode} alt="" />
                    <p className='text-2xl font-bold'>VS Code</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={git} alt="" />
                    <p className='text-2xl font-bold'>GIT</p>
                </div>

                <div className='skill-card flex gap-4 items-center transform transition-transform hover:-translate-y-1 p-4'>
                    <img className='w-14' src={heroku} alt="" />
                    <p className='text-2xl font-bold'>Heroku</p>
                </div>


            </div>


        </div>
    );
};

export default Skills;