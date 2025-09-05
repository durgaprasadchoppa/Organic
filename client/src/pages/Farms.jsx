import React from 'react'
import { assets } from '../assets/assets';

const Farms = () => {
  return (
    <div>
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-5xl mt-10 font-semibold text-center text-primary-dull mx-auto">Our Latest Creations</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">"Farming is not just a way of life; it's the art of nurturing the earth, the roots of sustenance, and the harvest of tomorrow’s promise."</p>
            <div className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-10xl mx-auto">
                <div className="relative group rounded-lg overflow-hidden">
                    <img src={assets.farm1} alt="image" className="size-100 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Cultivation Of Tomato</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src={assets.farm2} alt="image" className="size-100 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Cultivation Of Paddy</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden">
                    <img src={assets.farm3} alt="image" className="size-100 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Farm Irrigation</h1>
                        <a href="#" className="flex items-center gap-1 text-sm text-white/70">
                            Show More
                            <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                
                
                
                
                
            </div>
        </>
    </div>
  )
}

export default Farms;