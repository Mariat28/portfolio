import logo from '../assets/logo.png'
const Header=()=>{
    return(
        <div className="h-16 bg-gradient-to-r from-slate-900 to-blue-900 fixed  inset-0 z-10   flex items-center ">
            <div className='container mx-auto flex justify-end items-center  w-full '>
                <div className='w-1/2 absolute inset-x-0'>
                    <div className='flex items-center '>
                        <img src={logo} alt='logo' className='h-24 w-24'/>
                    </div>
                </div>
                <div className='text-sm xl:w-1/2 w-3/4 text-slate-200 flex items-center justify-between px-2 '>
                    <div className='capitalize  flex w-full justify-evenly  '>
                        <span className='cursor-pointer hover:text-teal-300 '>about</span>
                        <span className='cursor-pointer hover:text-teal-300'>experience</span>
                        <span className='cursor-pointer hover:text-teal-300'>work</span>
                        <span className='cursor-pointer hover:text-teal-300 ' >get in touch</span>
                    </div>
                        <button className='rounded-sm border-teal-400 border-b-teal-600 border-r-teal-600 text-x-teal-400 border py-2 px-4 text-teal-400 hover:animate-pulse'>Resume</button>

                </div>
            </div>

        </div>
    )
}

export default Header;