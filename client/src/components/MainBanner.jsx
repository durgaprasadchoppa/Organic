// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const MainBanner = () => {
//   return (
//     <div className='relative'>
//         <img src={assets.main_banner_bg} alt='banner' className='w-full hidden md:block'/>
//         <img src={assets.main_banner_bg_sm} alt='banner' className='w-full md:hidden'/>
//         <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
//             <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You Can Trust,Savings you Will Love!</h1>
        
//         <div className='flex items-center mt-6 font-medium'>
//             <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
//             Shop now
//             <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt='arrow' />
//             </Link>
//             <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
//             Explore deals
//             <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt='arrow' />
//             </Link>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default MainBanner



// import React, { useEffect, useState } from 'react';
// import slide1 from '../assets/slide1.jpeg';
// import slide2 from '../assets/slide2.jpeg';
// import main_banner_bg from '../assets/main_banner_bg.png';
// import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom'


// const slides = [
//   main_banner_bg,
//   slide1,
//   slide2,
// ];

// const MainBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full">
//       <div className="overflow-hidden w-full h-[220px] md:h-[400px] lg:h-[500px]">
//         <div
//           className="flex transition-transform duration-500 ease-in-out w-full h-full"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((src, idx) => (
//             <img
//               key={idx}
//               src={src}
//               alt={`Slide ${idx + 1}`}
//               className="w-full h-full object-cover flex-shrink-0"
//               style={{ minWidth: '100%' }}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
//         {slides.map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-black' : 'bg-black/20'}`}
//             onClick={() => setCurrentSlide(idx)}
//             style={{ cursor: 'pointer' }}
//           ></span>
//         ))}
//       </div>
//       <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
//             <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Freshness You Can Trust,Savings you Will Love!</h1>
        
//         <div className='flex items-center mt-6 font-medium'>
//             <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
//             Shop now
//             <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt='arrow' />
//             </Link>
//             <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
//             Explore deals
//             <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt='arrow' />
//             </Link>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default MainBanner;



import React, { useEffect, useState } from 'react';
import slide1 from '../assets/slide1.jpeg';
// import slide2 from '../assets/slide2.jpeg';
import main_banner_bg from '../assets/main_banner_bg.png';
import main_banner_bg_sm from '../assets/main_banner_bg_sm.png';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

// Desktop and mobile slides
const slidesDesktop = [
  main_banner_bg,
  
  slide1,
  assets.farm2
];
const slidesMobile = [
  main_banner_bg_sm,
  slide1,
  assets.farm2
];

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % (isMobile ? slidesMobile.length : slidesDesktop.length));
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const slides = isMobile ? slidesMobile : slidesDesktop;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full h-[180px] sm:h-[220px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0 rounded-xl md:rounded-2xl lg:rounded-3xl"
              style={{ minWidth: '100%' }}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentSlide === idx ? 'bg-black' : 'bg-black/20'}`}
            onClick={() => setCurrentSlide(idx)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-12 sm:pb-20 md:pb-0 px-2 sm:px-4 md:pl-18 lg:pl-24 z-10'>
        <h1 className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-xs sm:max-w-md md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
          Freshness You Can Trust, Savings you Will Love!
        </h1>
        <div className='flex flex-col sm:flex-row items-center mt-4 sm:mt-6 font-medium gap-2 sm:gap-4'>
          <Link to={"/products"} className='group flex items-center gap-2 px-5 sm:px-7 md:px-9 py-2 sm:py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
            Shop now
            <img className='sm:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt='arrow' />
          </Link>
          <Link to={"/products"} className='group hidden sm:flex items-center gap-2 px-7 md:px-9 py-2 sm:py-3 cursor-pointer'>
            Explore deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt='arrow' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;