import './styles.css'
import {styleText} from './letters'
import {  useEffect, useRef } from 'react'
import Dices from './Dices'
const HeroSection = () =>{
    const letterWraperRef = useRef();
    const lineRef = useRef();
    useEffect(()=>{
        console.log('wrapper 1', letterWraperRef.current)
        styleText(letterWraperRef);
    },[letterWraperRef])

    return(
        <div className='w-screen  mt-16 flex overflow-auto bg-gradient-to-r from-slate-900 to-blue-900 '>
            <div className="h-screen flex flex-col justify-center  md:w-1/2">
                <div className="xl:mx-6 mx-4 xl:mt-16  justify-center flex flex-col ">
                    <div className="text-sm text-teal-400 font-mono tracking-wide text-wrapper" ref={letterWraperRef}>
                        <span className="line line1" ref={lineRef}></span>
                        <span className="letters" >Hi, my name is</span>
                    </div>
                    <div className="xl:text-6xl text-4xl text-blue-100   mt-2 font-semibold tracking-tight ">Mariat Ndagire.</div>
                    <div className="xl:text-5xl text-3xl text-slate-400 mt-5 font-semibold  leading-5 tracking-wide">I build things for the web.</div>
                    <div className="text-sm  mt-6 text-slate-500 xl:w-1/2 ">
                        I am a software engineer specializing in designing and building exceptional digital experiences. Currently I'm focused on curating accessible and human-centered products at 
                        <span className="text-teal-300 ml-1">Diamond Trust Bank.</span> 
                    </div>
                    <div>
                        <button className='xl:mt-16 mt-8 rounded-sm border-teal-300 border-b-teal-600 border-r-teal-600 text-x-teal-400 border py-2 px-4 text-teal-400 hover:animate-pulse hover:font-semibold text-sm'>Check out my work!</button>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col justify-evenly  md:w-1/2'>
                <div className='flex justify-center mt-10'>
                    <Dices gradient='from-violet-500 to-fuchsia-500 origin-center rotate-45'></Dices>
                </div>
                <div className='flex justify-start ml-20'>
                    <Dices gradient='from-cyan-500 to-blue-500 origin-top-left rotate-12'></Dices>
                </div>
                <div className='flex justify-end mr-8'>
                    <Dices gradient='from-sky-500 to-indigo-500 origin-top-left rotate-12'></Dices>
                </div>
            </div>
        </div>

    )
}

export default HeroSection;